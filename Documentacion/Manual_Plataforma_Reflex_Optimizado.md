
# 🛠️ Manual Plataforma Reflex

Guía estructurada del sistema de información para producción, inventarios, compras y ventas.

---

## 📊 1. Tipos de Inventario

---

### 1.1 Stock Real

Representa la cantidad **física** de productos actualmente en la empresa, sin considerar si están comprometidos para otros usos.

#### 🔼 Aumentos
- Productos **producidos** en reportes con `INV` vacío.
- **Recepción de mercancía** comprada (`INV` vacío en productos de compra).

#### 🔽 Disminuciones
- Productos **empacados/despachados** (`INV` vacío).
- **Insumos utilizados** en producción (`INV` vacío).

#### 🔁 Consolidación
- Al hacer un nuevo **reporte de inventario**, todos los registros previos con `INV` vacío se actualizan a `INV = 'X'`.

---

### 1.2 Stock Producción

Representa la **materia prima disponible para producción**, considerando lo que ya está reservado.

> Fórmula:
> ```
> Stock Producción = Stock Real - Insumos comprometidos en OP no finalizadas
> ```

---

### 1.3 Stock Ventas

*(Pendiente de definir: mostrará disponibilidad real para ventas descontando compromisos de producción y reservas.)*

---

## 📦 2. Gestión de Productos

---

### 2.1 Datos del producto

Al crear o editar un producto se definen:

- Nombre, código, unidad de medida, categoría, línea productiva
- Campo **Tipo** (conectado a tabla):
  - ¿Es producto o materia prima?
  - ¿Se fabrica o se compra?

---

### 2.2 Insumos

Cada producto puede tener varios insumos con su **rendimiento** (cantidad necesaria por unidad).

#### Tipos de insumo:
- **Insumo fijo**
- **Insumo variable**
- **Artículo**
- **Empaque**

---

### 2.3 Consultas inversas

También es posible consultar:

> ¿En qué productos se utiliza un insumo?

Esto permite anticipar afectaciones si un insumo está bajo en stock o cambia de precio.

---

## 🏭 3. Orden de Producción

---

### 3.1 Generación de OP

- Se selecciona producto a fabricar
- Se traen automáticamente insumos, rendimiento y tipo

#### Cálculo:
```text
cantidad_necesaria = rendimiento × unidades_a_producir
```

### 3.2 Validaciones:
- ¿Hay suficiente stock producción?
- ¿Algún insumo necesita ser producido?
- ¿Algún insumo requiere requisición de compra?

---

## 📝 4. Reporte de Producción

---

Cada OP puede tener uno o varios reportes.

### Se registra:
- Producto terminado
- Cantidad producida
- Insumos realmente usados
- Usuario y fecha

Si `INV` está vacío:
- Se **suma al stock real** el producto
- Se **resta del stock real** los insumos

---

## 🚚 5. Orden de Despacho

---

### 5.1 Creación

- Generada desde una venta
- Productos a despachar seleccionados parcial o totalmente

#### Campos:
- Cliente
- Fecha de despacho
- Dirección
- Estado (pendiente, empacando, empacado, despachado)

---

### 5.2 Preparación de Insumos para Despacho

Mientras la orden está en proceso:
- Se agregan artículos y empaques
- Ej: tornillería, cajas, etiquetas
- Esto afecta **Stock Real**

✅ Cuando se finaliza esta configuración, se genera oficialmente la orden de despacho.

---

## 💰 6. Cálculo de Costos de Producción

---

Se pueden incluir costos adicionales:

- ✅ Mano de obra directa
- ✅ Costos indirectos (energía, depreciación)
- ✅ Costos de empaque y logística interna
- ✅ Costos administrativos proporcionalizados

### Aplicación:
- Se suman al costo unitario total
- Se usan para:
  - Definir precios de venta
  - Medir rentabilidad
  - Evaluar eficiencia

---
