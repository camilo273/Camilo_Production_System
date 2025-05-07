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

### ProductManager
- Componente central para la gestión de productos.
- Incluye título, campo de búsqueda, filtros, botones de acción y listado de productos.
- Integra un botón “Crear Producto” (con ícono `FaPlus`) y un botón “Agregar Referencia” (con ícono `FaLink`), este último deshabilitado si no hay producto seleccionado.
- Usa el estado `openCreateModal` para controlar el despliegue del formulario modal (`ProductForm`) en modo creación.
- Al seleccionar un producto de la lista, se actualiza `selectedProductId`, lo cual habilita el botón de referencia.
- El listado de productos se muestra mediante `ProductListInfinite` con scroll infinito, filtrado por búsqueda y línea productiva.
- Utiliza el hook `useProductsInfinite` para paginar datos progresivamente desde la API.

### useProductsInfinite (hook)
- Hook personalizado que permite cargar productos de forma incremental mediante scroll infinito.
- Llama al endpoint `/api/products` con parámetros dinámicos (`search`, `linea`, `limit`) utilizando `fetch` o `axios`.
- Devuelve:
  - `products`: array acumulado de productos.
  - `loading`: estado booleano mientras se carga.
  - `hasMore`: indica si hay más productos por cargar.
  - `lastProductRef`: referencia para observar el último producto y disparar la carga automática.
- Utiliza `IntersectionObserver` internamente para detectar el final de la lista y solicitar más productos automáticamente.
- Se usa dentro de `ProductListInfinite` y es clave para la experiencia de navegación fluida.

## Mapa de relaciones

- `ProductListInfinite` → usa `ProductCard` para cada producto.
- `ProductManager` → contiene `ProductListInfinite`.


---

### ProductSearch
- Campo de entrada que permite buscar productos por nombre o código.
- Dispara un evento `onChange` que actualiza el término de búsqueda en el estado del componente padre.
- Normaliza el texto a minúsculas para evitar problemas de coincidencia.

### DropdownLinea
- Componente que muestra una lista desplegable de líneas productivas.
- Se alimenta del archivo `lineasproductivas.json` almacenado en `public/cache/`.
- Permite al usuario filtrar los productos según la línea productiva seleccionada.
- Almacena el valor seleccionado y lo envía al componente padre mediante `onChange`.

### Button
- Botón reutilizable con estilos personalizados.
- Soporta íconos (`icon`) y etiquetas (`label`).
- Acepta props como:
  - `onClick`: función ejecutada al hacer clic.
  - `disabled`: estado desactivado.
  - `variant`: tipo de estilo (ej. `primary`, `secondary`).
  - `title`: texto auxiliar cuando está deshabilitado.
- Se utiliza en múltiples componentes como `ProductManager`.