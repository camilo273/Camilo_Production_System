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

