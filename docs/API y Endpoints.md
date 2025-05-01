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