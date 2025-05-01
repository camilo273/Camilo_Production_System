---

### 2️⃣ **Componentes Frontend.md**

```markdown
# Componentes Frontend – Plataforma Reflex

Este documento describe los principales componentes de la interfaz en React.

## Componentes

### ProductListInfinite
- Muestra el listado de productos con scroll infinito.
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