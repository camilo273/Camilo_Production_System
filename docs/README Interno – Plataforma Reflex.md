# 📦 Plataforma Reflex

**Plataforma Reflex** es un sistema de gestión empresarial desarrollado con una arquitectura full stack moderna basada en React.js, Node.js, SQL Server y almacenamiento en caché con archivos JSON.

## 🧱 Tecnologías usadas
- Frontend: React.js
- Backend: Node.js + Express
- Base de datos: SQL Server
- Almacenamiento auxiliar: Azure Blob Storage, archivos JSON
- Herramientas: Power BI, GitHub, VS Code

## 🚀 ¿Cómo iniciar?
1. Clona el proyecto.
2. Ejecuta `npm install` en raíz, `client/` y `server/`.
3. Usa `npm run dev` para iniciar frontend y backend en paralelo.

## 📚 Documentación
Consulta la carpeta `docs/` o entra a [`docs/README.md`](docs/README.md) para ver todos los manuales técnicos, estructura de datos y APIs disponibles.

## 🗂️ Estructura del Proyecto

```plaintext
Camilo_Production_System/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── products/       # Componentes relacionados con productos
│   │   │   ├── purchases/      # (Futuro) componentes de compras
│   │   │   ├── suppliers/      # (Futuro) componentes de proveedores
│   │   │   ├── ui/             # Componentes visuales reutilizables
│   │   ├── hooks/              # Hooks personalizados como useProductsInfinite
│   │   ├── services/           # Funciones para llamadas a API
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── config/                 # Conexión base de datos y utilidades
│   ├── public/cache/          # Datos precargados en formato JSON
├── sql/
│   ├── tables/                 # Scripts SQL para estructura de base de datos
├── docs/
│   ├── Manual_Plataforma_Reflex.md
│   ├── Procesos del Sistema – Plataforma Reflex.md
│   ├── API y Endpoints.md
│   ├── Componentes Frontend.md
│   ├── _Estructura_Base_De_Datos_SQL.md
│   ├── Guia_Desarrollo_Plataforma_Reflex.md
│   ├── README Interno – Plataforma Reflex.md (este archivo)
│   ├── README.md (índice técnico de documentación)
│   └── Changelog.md
```

Esta estructura refleja cómo están organizados actualmente los componentes frontend, rutas backend, y la documentación del sistema.

## ✍️ Autor
Camilo Becerra — Proyecto 2025
