# 🧭 README Interno – Plataforma Reflex

Este archivo explica la arquitectura y organización interna del proyecto **Camilo_Production_System**, también conocido como **Plataforma Reflex**.

## 🏗 Estructura del Proyecto

```
Camilo_Production_System/
│
├── client/                  # Aplicación frontend (React.js)
│   ├── src/
│   │   ├── components/      # Componentes reutilizables de UI
│   │   └── hooks/           # Custom hooks para gestión de datos (ej. scroll infinito)
│   └── public/cache/        # Archivos JSON locales para datos en caché
│
├── server/                  # Backend (Node.js + Express + SQL Server)
│   ├── controllers/         # Lógica de rutas y controladores
│   ├── routes/              # Definición de endpoints
│   ├── cache/               # Gestión de caché en archivos JSON
│   ├── config/              # Conexión a base de datos y variables
│   └── index.js             # Archivo principal del servidor
│
├── docs/                    # Documentación técnica
│   ├── _Estructura_Base_De_Datos_SQL.md
│   └── ... (otros archivos técnicos)
│
├── .env                     # Variables de entorno (NO versionado)
├── .gitignore               # Ignora carpetas como node_modules, .env, etc.
├── package.json             # Scripts para ejecutar todo el sistema
└── README.md                # Descripción general del proyecto
```

## 🔌 Conexiones entre capas
- **Frontend** consume la API del **backend** usando Axios.
- **Backend** se conecta con una base de datos **SQL Server**.
- **Caché local** en archivos `.json` sirve para acelerar ciertas cargas de datos (como líneas comerciales y productivas).

## 🚀 Scripts importantes
Desde la raíz del proyecto:
- `npm run dev` → Inicia frontend y backend en paralelo
- `npm run clean` → Borra build frontend
- `npm run deploy` → Genera build optimizado y lo copia al servidor

---

Este documento se irá actualizando conforme el sistema evolucione.

