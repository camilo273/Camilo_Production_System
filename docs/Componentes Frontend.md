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