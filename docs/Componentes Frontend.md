# Componentes Frontend – Plataforma Reflex

Este documento describe los principales componentes de la interfaz en React.

## Componentes

### ProductListInfinite
- Muestra el listado de productos con scroll infinito.
- Ordena los productos por `crce7_producto` y luego por `crce7_referencia` en orden ascendente. Esto asegura que los productos padre se muestren primero, seguidos de sus referencias en orden jerárquico.
- **Props principales:**
  - `products`: array de productos.
  - `setSelectedProductId`: función para seleccionar producto.

### ProductCard
- Renderiza la tarjeta de un producto individual.
- Muestra nombre, código, precio y línea productiva.
- Aplica color dinámico a la línea productiva según `color_linea_productiva`.
- Si el producto contiene una URL en el campo `crce7_imagen_url`, se renderiza una imagen en la parte superior de la tarjeta.
- La imagen se muestra con `object-fit: cover`, altura fija de `200px`, y bordes redondeados superiores.
- Este diseño mejora la visibilidad del producto y genera una presentación uniforme en todo el listado.

## Mapa de relaciones

- `ProductListInfinite` → usa `ProductCard` para cada producto.
- `ProductManager` → contiene `ProductListInfinite`.

*Agregar descripción de nuevos componentes al ser creados.*

### Eliminar Producto (Botón)

- Este botón permite eliminar un producto desde la interfaz.
- Se encuentra junto a los botones “Crear Producto” y “Agregar Referencia”.
- Usa el componente `Button` con el ícono `FaTrash` y estilo `variant="danger"`.
- Solo se habilita si:
  - Hay un producto seleccionado (`selectedProductId !== null`)
  - El producto no es un producto padre (`crce7_inv === 1`)
- Al hacer clic:
  1. Muestra un diálogo de confirmación.
  2. Envía una solicitud `DELETE` al endpoint `/api/products/:id`.
  3. Si el producto es un padre con referencias activas, el backend responde con un mensaje que impide su eliminación.
  4. Si el producto es válido para eliminación, se marca como eliminado (`crce7_eliminado = GETDATE()`).
  5. Si es la última referencia de un grupo, el backend actualiza el producto padre para que `crce7_inv = 1`.
  6. La interfaz se recarga automáticamente para reflejar los cambios.

### BadgeLabel

- Componente visual reutilizable para mostrar etiquetas con color de fondo dinámico.
- Se utiliza para representar:
  - Línea productiva (`nombre_linea_productiva` + `color_linea_productiva`)
  - Tipo de producto (`Tipo` + `Tipo_color`)
- Recibe dos props:
  - `text`: texto visible dentro del badge.
  - `backgroundColor`: color de fondo del badge.
- Calcula automáticamente el color del texto (negro o blanco) según el brillo del fondo para mantener la legibilidad.
- Se usa dentro de `ProductCard` para renderizar uno o más badges alineados con la información visual del producto.