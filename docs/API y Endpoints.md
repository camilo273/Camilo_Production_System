# API y Endpoints – Plataforma Reflex

Este documento lista los endpoints disponibles en el backend de la plataforma, su propósito y ejemplos de uso.

## Endpoints Actuales

### GET /api/products
- **Descripción:** Obtiene todos los productos.
- **Response ejemplo:**
```json
[
  {
    "crce7_t_productosid": "GUID",
    "crce7_nombre_": "Nombre del producto",
    "crce7_codigo": "Código del producto",
    "nombre_linea_productiva": "Nombre de línea",
    "color_linea_productiva": "#FF0000"
  }
]

Notas
	•	Los endpoints devuelven datos ordenados por crce7_referencia DESC y crce7_producto ASC.
	•	Se usa JSON como formato de respuesta.
	•  Este endpoint solo devuelve productos donde el campo crce7_eliminado está vacío (NULL), es decir, productos que no han sido eliminados lógicamente.
	•	El código mostrado de cada producto en las respuestas sigue la lógica: si crce7_referencia es mayor a 0, el código final será crce7_producto + '-' + crce7_referencia; de lo contrario, solo se usa crce7_producto.

### DELETE /api/products/:id
- **Descripción:** Elimina lógicamente un producto mediante su ID. Valida que el producto pueda ser eliminado según su rol y referencias.
- **Restricciones:**
  - No se puede eliminar un producto padre (`crce7_inv = 0`) si aún tiene referencias activas (`crce7_referencia = 1` y `crce7_eliminado IS NULL`).
- **Comportamiento:**
  - Marca el campo `crce7_eliminado` con la fecha actual (`GETDATE()`).
  - Si el producto era la última referencia activa, actualiza el producto padre (`crce7_inv = 1`).
- **Response de éxito:**
```json
{ "message": "✅ Producto con ID [GUID] marcado como eliminado." }
```
- **Response de error si no puede eliminarse:**
```json
{ "error": "❌ No se puede eliminar un producto padre mientras existan referencias activas." }
```
- **Response de error si no existe el producto:**
```json
{ "error": "❌ Producto no encontrado." }
```