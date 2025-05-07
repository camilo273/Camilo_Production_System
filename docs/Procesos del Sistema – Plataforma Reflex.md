# 📋 Procesos del Sistema – Plataforma Reflex

Este documento describe los procesos clave del sistema desarrollado para la Plataforma Reflex, incluyendo flujos de trabajo, integraciones y puntos de entrada.

---

## 🏷️ 1. Carga y visualización de productos

**Flujo general:**
1. El usuario accede a la página de productos.
2. El sistema carga los productos de manera progresiva utilizando scroll infinito.
3. Cada lote se obtiene desde la API paginada del backend (`/api/products?offset=X&limit=Y`).
4. Los productos se renderizan con tarjetas visuales reutilizables.

**Componentes involucrados:**
- `ProductListInfinite.jsx`
- `useProductsInfinite.js`
- `productController.js`
- `crce7_t_productos` (tabla SQL)

**Consideraciones:**
- Scroll infinito implementado con React y `IntersectionObserver`.
- Mejora UX cargando productos conforme el usuario navega.


**Filtrado y eliminación lógica de productos:**

- Los productos eliminados no se eliminan físicamente de la base de datos; se marca la fecha en el campo `crce7_eliminado` (`datetime`), lo que los excluye de todas las consultas del sistema.
- Las consultas SQL para visualizar productos incluyen `WHERE crce7_eliminado IS NULL`, por lo que un producto eliminado no volverá a aparecer tras actualizar.
- La eliminación se realiza desde el botón “Eliminar Producto” en el frontend, mediante una solicitud `DELETE /api/products/:id` al backend.
- Lógica de eliminación implementada en el backend:
  - Si el producto es un **producto padre** (`crce7_inv = 0`) y tiene **referencias activas** (`crce7_producto = X`, `crce7_referencia > 0`, `crce7_eliminado IS NULL`), se impide la eliminación y se muestra un mensaje explicativo.
  - Si no hay referencias activas, el producto se marca como eliminado (`crce7_eliminado = GETDATE()`).
  - Si el producto eliminado era una referencia y no quedan otras referencias activas del mismo padre, entonces se actualiza el producto padre y se cambia su campo `crce7_inv = 1`, indicando que ya no es un padre.

**Orden y construcción del código de producto:**

- Cada producto tiene los campos `crce7_producto` (valor base) y `crce7_referencia` (valor incremental si es una subreferencia).
- El campo visible `crce7_codigo` se construye así:
  - Si `crce7_referencia = 0` → `crce7_codigo = crce7_producto`
  - Si `crce7_referencia > 0` → `crce7_codigo = crce7_producto + '-' + crce7_referencia`
- Para garantizar una visualización clara y jerárquica, los productos se ordenan:
  - Primero por `crce7_producto` en orden ascendente.
  - Luego por `crce7_referencia` en orden ascendente.
- Esto asegura que los productos padre se muestren antes que sus referencias.

**Ejemplo de orden esperado:**

```
1
1-1
1-2
2
2-1
5
5-1
5-2
6
```

**Resumen del flujo técnico:**
1. El usuario hace clic en “Eliminar producto”.
2. El sistema consulta si es padre y si tiene referencias activas.
3. Si puede eliminarse, se actualiza `crce7_eliminado`.
4. Si era la última referencia, también se actualiza `crce7_inv` del padre.

**Resultado:** La integridad de los datos se mantiene, las referencias se respetan, y los productos eliminados no vuelven a mostrarse en el sistema.

---

## 🔄 2. Sistema de caché local (líneas comerciales y productivas)

**Propósito:** Evitar múltiples llamadas al backend para datos que cambian con poca frecuencia.

**Módulos involucrados:**
- `cacheUtils.js`
- `lineasComercialesCache.js`
- `lineasProductivasCache.js`
- Rutas: `/api/lineascomerciales`, `/api/lineasproductivas`

**Proceso resumido:**
1. El servidor verifica si existe un archivo de caché válido.
2. Si no existe o está vencido, consulta SQL Server y guarda en JSON.
3. El frontend accede directamente a los archivos cacheados en `client/public/cache/`.

**Beneficio:**
- Mejora tiempo de carga inicial.
- Reduce presión sobre SQL Server.

---

## 🛠️ 3. Despliegue local en desarrollo

**Script unificado:** `npm run dev`

**Ejecuta en paralelo:**
- Cliente React (puerto 3000)
- Servidor Node.js (puerto 3001)

**Stack:**
- `concurrently`
- `react-scripts` para frontend
- `express` y `mssql` en backend

---

## 📦 4. Despliegue para producción

**Comando:** `npm run deploy`

**Proceso:**
1. Ejecuta `react-scripts build` para generar frontend optimizado.
2. Copia `client/build/` dentro de `server/public/`.
3. Backend sirve archivos estáticos desde Express.

**Notas:**
- Usa `NODE_OPTIONS=--openssl-legacy-provider` si Node 17+ genera error de hash en build.

---

## ✅ Próximos procesos a documentar
- Creación y edición de productos.
- Manejo de relaciones con líneas comerciales y productivas.
- Procesos de compra y despacho.
- Tablero Power BI para control de producción.

---

Este archivo se irá completando a medida que se implementen nuevos flujos en la plataforma.
