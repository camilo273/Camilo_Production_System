# 🔗 Relaciones Entre Tablas SQL – Plataforma Reflex

Este documento describe las relaciones clave entre tablas en la base de datos SQL del sistema Plataforma Reflex. Las relaciones están organizadas por áreas funcionales y se indican usando el formato:

```
Tabla Origen (Campo Foráneo) → Tabla Destino (Llave Primaria)
```

---

## 🧾 Comercial

### Cotizaciones y Productos
- `crce7_t_cotprod.crce7_cotizacion` → `crce7_t_cotizaciones.crce7_t_cotizacionesid`
- `crce7_t_cotprod.crce7_producto` → `crce7_t_productos.crce7_t_productosid`

### Ventas y Productos
- `crce7_t_ventprods.crce7_venta` → `crce7_t_ventas.crce7_t_ventasid`
- `crce7_t_ventprods.crce7_producto` → `crce7_t_productos.crce7_t_productosid`

### Ventas y Clientes
- `crce7_t_ventas.crce7_cliente` → `crce7_t_clientes.crce7_t_clientesid`
- `crce7_t_ventas.crce7_contacto` → `crce7_t_cliente_cont.crce7_t_cliente_contid`

### Clientes y Direcciones
- `crce7_t_clientes_direccion.crce7_cliente` → `crce7_t_clientes.crce7_t_clientesid`


---

## 📦 Compras y Abastecimiento

### Compras y Proveedores
- `crce7_t_compra.crce7_proovedor` → `crce7_t_proovedores.crce7_t_proovedoresid`

### Compra Productos
- `crce7_t_compr_prod.crce7_compra` → `crce7_t_compra.crce7_t_compraid`
- `crce7_t_compr_prod.crce7_producto` → `crce7_t_productos.crce7_t_productosid`

### Entregas
- `crce7_t_comp_entregas.crce7_t_compr_prod` → `crce7_t_compr_prod.crce7_t_compr_prodid`

### Pagos
- `crce7_t_pago_compra.crce7_t_compra` → `crce7_t_compra.crce7_t_compraid`
- `crce7_t_pago_compra.crce7_t_pago` → `crce7_t_pagos.crce7_t_pagosid`


---

## ⚙️ Producción

### Órdenes de Producción
- `crce7_t_op.crce7_od_prod` → `crce7_od_prod.crce7_od_prodid`
- `crce7_t_op.crce7_producto` → `crce7_t_productos.crce7_t_productosid`

### Insumos por OP
- `crce7_t_op_ins.crce7_op` → `crce7_t_op.crce7_t_opid`
- `crce7_t_op_ins.crce7_insumo` → `crce7_t_productos.crce7_t_productosid`


---

## 🧪 Inventario y Reportes

### Reposición Inventario
- `crce7_t_repinv.crce7_producto` → `crce7_t_productos.crce7_t_productosid`

### Reportes de Insumos y Productos
- `crce7_t_rep_ins.crce7_insumo` → `crce7_t_productos.crce7_t_productosid`
- `crce7_t_rep_prod.crce7_op` → `crce7_t_op.crce7_t_opid`


---

## 🔁 Requisiciones

### Requisición Productos
- `crce7_t_req_prod.crce7_producto` → `crce7_t_productos.crce7_t_productosid`
- `crce7_t_req_prod.crce7_requisicion` → `crce7_t_requisicion.crce7_t_requisicionid`


---

## 📌 Otras Relaciones

- `crce7_t_productos.crce7_inslp1` → `crce7_t_lineaproductiva.crce7_t_lineaproductivaid`
- `crce7_t_productos.crce7_inslp2` → `crce7_t_lineaproductiva.crce7_t_lineaproductivaid`
- `crce7_t_productos.crce7_lineaproductiva` → `crce7_t_lineaproductiva.crce7_t_lineaproductivaid`


---

> ⚠️ Esta documentación se mantendrá actualizada a medida que se definan nuevas llaves foráneas en SQL.

