// ✅ Crear un nuevo producto o referencia con lógica de código e inventario
exports.createProduct = async (req, res) => {
  try {
    const {
      producto,
      referencia,
      inv,
      lineaproductiva,
      lineacomercial1,
      lineacomercial2,
      tipo,
      unidad,
      descripcion,
      peso_kg,
      stock_minimo,
      eliminado,
      inslp1,
      inslp2,
      image_url,
      real_inventory,
      price_per_unit
    } = req.body;

    // 🔐 Validaciones básicas
    if (!producto) return res.status(400).json({ error: "El campo 'producto' es obligatorio." });
    if (referencia === undefined || referencia === null) return res.status(400).json({ error: "El campo 'referencia' es obligatorio." });
    if (inv === undefined || inv === null) return res.status(400).json({ error: "El campo 'inv' es obligatorio." });

    // 🧠 Generar código según producto y referencia
    const codigo = referencia === "0" || referencia === 0
      ? `${producto}`
      : `${producto}-${referencia}`;

    const pool = await poolConnect;

    // 🔁 Si estamos creando una referencia, actualizamos el producto padre a inv = 0
    if (referencia !== "0" && referencia !== 0) {
      await pool.request()
        .input('codigoPadre', sql.VarChar, `${producto}`)
        .query(`
          UPDATE crce7_t_productos
          SET crce7_alaventa = 0
          WHERE crce7_codigo = @codigoPadre
        `);
    }

    // 🟢 Insertar nuevo producto o referencia
    await pool.request()
      .input('nombre', sql.VarChar, descripcion || codigo)
      .input('codigo', sql.VarChar, codigo)
      .input('producto', sql.Int, parseInt(producto))
      .input('referencia', sql.Int, parseInt(referencia))
      .input('lineaproductiva', lineaproductiva || null)
      .input('lincom1', lineacomercial1 || null)
      .input('lincom2', lineacomercial2 || null)
      .input('tipo', sql.Int, tipo || 1)
      .input('unidad', sql.VarChar, unidad || null)
      .input('descripcion', sql.VarChar, descripcion || null)
      .input('pesokg', peso_kg || null)
      .input('stockminimo', stock_minimo || null)
      .input('alaventa', sql.Int, inv)
      .input('eliminado', sql.Int, eliminado || 0)
      .input('inslp1', inslp1 || null)
      .input('inslp2', inslp2 || null)
      .input('imagen', image_url || null)
      .input('inventario', sql.Decimal(18, 4), real_inventory || 0)
      .input('valorunitario', sql.Decimal(18, 4), price_per_unit || 0)
      .query(`
        INSERT INTO crce7_t_productos (
          crce7_nombre_, crce7_codigo, crce7_producto, crce7_referencia,
          crce7_lineaproductiva, crce7_lincom1, crce7_lincom2,
          crce7_tipo, crce7_unidad, crce7_descripcion, crce7_pesokg,
          crce7_stockminimo, crce7_alaventa, crce7_eliminado,
          crce7_inslp1, crce7_inslp2, crce7_imagen_url,
          crce7_repinv, crce7_valor1
        ) VALUES (
          @nombre, @codigo, @producto, @referencia,
          @lineaproductiva, @lincom1, @lincom2,
          @tipo, @unidad, @descripcion, @pesokg,
          @stockminimo, @alaventa, @eliminado,
          @inslp1, @inslp2, @imagen,
          @inventario, @valorunitario
        )
      `);

    res.status(201).json({ message: '✅ Elemento creado correctamente', codigo });
  } catch (err) {
    console.error('❌ Error al crear producto o referencia:', err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = (req, res) => {
  res.send('🧪 getAllProducts funcionando');
};

exports.getProductById = (req, res) => {
  res.send(`🧪 getProductById para ID ${req.params.id}`);
};

exports.updateProduct = (req, res) => {
  res.send(`🧪 updateProduct para ID ${req.params.id}`);
};

exports.deleteProduct = async (req, res) => {
  const { poolConnect, sql } = require('../config/db');
  const productoId = req.params.id;

  try {
    const pool = await poolConnect;

    // 1. Verificar si el producto existe
    const productoResult = await pool.request()
      .input('id', sql.UniqueIdentifier, productoId)
      .query(`
        SELECT crce7_producto, crce7_inv
        FROM crce7_t_productos
        WHERE crce7_t_productosid = @id
      `);

    const producto = productoResult.recordset[0];

    if (!producto) {
      return res.status(404).json({ error: '❌ Producto no encontrado.' });
    }

    const { crce7_producto, crce7_inv } = producto;

    // 2. Si es producto padre, verificar si tiene referencias activas
    if (crce7_inv === 0) {
      const referenciasResult = await pool.request()
        .input('codigo', sql.Int, crce7_producto)
        .query(`
          SELECT COUNT(*) AS total
          FROM crce7_t_productos
          WHERE crce7_producto = @codigo
          AND crce7_referencia > 0
          AND crce7_eliminado IS NULL
        `);

      const referenciasActivas = referenciasResult.recordset[0].total;

      if (referenciasActivas > 0) {
        return res.status(400).json({
          error: '❌ Este producto es un producto padre. Para poder eliminarlo, primero debes eliminar todas sus referencias activas.'
        });
      }
    }

    // 3. Marcar el producto como eliminado
    await pool.request()
      .input('id', sql.UniqueIdentifier, productoId)
      .query(`
        UPDATE crce7_t_productos
        SET crce7_eliminado = GETDATE()
        WHERE crce7_t_productosid = @id
      `);

    // 4. Si era una referencia, verificar si quedan otras activas. Si no, actualizar el padre (inv = 1)
    const referenciasRestantes = await pool.request()
      .input('codigo', sql.Int, crce7_producto)
      .query(`
        SELECT COUNT(*) AS total
        FROM crce7_t_productos
        WHERE crce7_producto = @codigo
        AND crce7_referencia > 0
        AND crce7_eliminado IS NULL
      `);

    if (referenciasRestantes.recordset[0].total === 0) {
      await pool.request()
        .input('codigo', sql.Int, crce7_producto)
        .query(`
          UPDATE crce7_t_productos
          SET crce7_inv = 1
          WHERE crce7_producto = @codigo
          AND crce7_referencia = 0
        `);
    }

    res.status(200).json({ message: '✅ Producto eliminado correctamente.' });

  } catch (err) {
    console.error('❌ Error al eliminar producto:', err.message);
    res.status(500).json({ error: 'Error al intentar eliminar el producto.' });
  }
};

exports.prepareNewProduct = (req, res) => {
  res.send('🧪 prepareNewProduct');
};

exports.saveProduct = (req, res) => {
  res.send('🧪 saveProduct');
};

// Obtener productos paginados con búsqueda y filtro de línea productiva
exports.getPaginatedProducts = async (req, res) => {
  const { poolConnect, sql } = require('../config/db');
  const pool = await poolConnect;

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;
  const offset = (page - 1) * limit;
  const search = req.query.search || '';
  const linea = req.query.linea || '';

  try {
    const result = await pool.request()
      .input('search', sql.NVarChar, `%${search}%`)
      .input('linea', sql.NVarChar, `%${linea}%`)
      .query(`
        SELECT COUNT(*) AS total
        FROM crce7_t_productos
        WHERE crce7_nombre_ LIKE @search 
          AND crce7_lineaproductiva LIKE @linea
          AND crce7_eliminado IS NULL;

        SELECT 
          p.*, 
          lp.crce7_lineaproductiva AS nombre_linea_productiva,
          lp.crce7_color AS color_linea_productiva,
          tt.Label AS Tipo,
          tt.color AS Tipo_color
        FROM crce7_t_productos p
        LEFT JOIN crce7_t_lineaproductiva lp
          ON p.crce7_lineaproductiva = lp.crce7_t_lineaproductivaid
        LEFT JOIN T_Tipo tt
          ON p.crce7_tipo = tt.Value
        WHERE p.crce7_nombre_ LIKE @search 
          AND p.crce7_lineaproductiva LIKE @linea
          AND p.crce7_eliminado IS NULL
        ORDER BY p.crce7_producto ASC, p.crce7_referencia ASC
        OFFSET ${offset} ROWS
        FETCH NEXT ${limit} ROWS ONLY;
      `);

    const total = result.recordsets[0][0].total;
    const data = result.recordsets[1];
    res.json({ total, data });
  } catch (error) {
    console.error('❌ Error al obtener productos paginados:', error);
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};