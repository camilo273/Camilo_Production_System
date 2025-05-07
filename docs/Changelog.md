# Changelog – Plataforma Reflex

Historial de cambios significativos en la plataforma.

## 2025-05-01

✅ Se agregó visualización de la línea productiva en `ProductCard` incluyendo color dinámico.

✅ Se implementó JOIN en backend para traer `nombre_linea_productiva` y `color_linea_productiva` en la consulta SQL.

✅ Definidas y normalizadas las tablas del módulo comercial en SQL incluyendo llaves primarias y foráneas.

✅ Establecidas relaciones entre `crce7_t_cotizaciones`, `crce7_t_cotprod`, `crce7_t_ventas`, `crce7_t_clientes` y `crce7_t_clientes_direccion`.

✅ Migrados los campos de línea productiva (`crce7_lineaproductiva`) y sus atributos relacionados al backend con JOIN SQL para integrarlos en la vista de productos.

✅ Implementado badge dinámico en `ProductCard` para mostrar nombre y color de la línea productiva en función de los datos del backend.

✅ Mejorado contraste automático del texto del badge para asegurar legibilidad sobre cualquier color de fondo.

✅ Validada estructura y visibilidad de la relación `ProductCard` → `ProductListInfinite` → API backend.

✅ Documentada lógica de la selección visual del producto activo en `ProductCard`.

## 2025-04-30

✅ Configurado scroll infinito en `ProductListInfinite`.

✅ Eliminado endpoint paginado en favor de carga progresiva.

*Agregar nuevas entradas al final de este archivo conforme se realicen commits importantes.*

## 2025-05-07

✅ Implementado botón “Eliminar Producto” en el frontend con validaciones de selección y tipo de producto (`crce7_inv = 1`).

✅ Conectado endpoint DELETE `/api/products/:id` con lógica de negocio en `productController.js`.

✅ Lógica de eliminación incluye verificación de referencias activas y actualización de estado padre (`crce7_inv = 1`) si corresponde.

✅ Productos eliminados ahora son ocultados del listado mediante `crce7_eliminado IS NULL` en las consultas SQL del backend.

✅ Documentada la funcionalidad completa en `Componentes Frontend.md` y `Procesos del Sistema – Plataforma Reflex.md`.