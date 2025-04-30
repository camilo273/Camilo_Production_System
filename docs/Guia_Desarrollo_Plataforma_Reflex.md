# Guía de Desarrollo - Plataforma Reflex

Esta guía resume la configuración del entorno de desarrollo actual para la Plataforma Reflex y sirve como referencia tanto para el usuario como para futuras ediciones asistidas por ChatGPT.

---

## 📁 Estructura del Proyecto

```
Camilo_Production_System/
├── client/              # Frontend React (CRA)
├── server/              # Backend Express + SQL
├── public/              # Carpeta servida en producción (copia de build)
├── node_modules/        # Módulos instalados
├── package.json         # Scripts globales y herramientas compartidas
├── .env                 # Variables de entorno (fuera de control de versiones)
├── nodemon.json         # Configuración de reinicio automático del backend
```

---

## 🧪 Entorno de Desarrollo

### 🔄 Desarrollo frontend (React)
- Comando:
  ```bash
  npm run start:frontend
  ```
- Características:
  - Usa `react-scripts`
  - Recarga automática al modificar archivos (hot reload)
  - Proxy a `localhost:3001` para peticiones API en desarrollo

### 🔄 Desarrollo backend (Node.js + Express)
- Comando:
  ```bash
  npm run dev:backend
  ```
- Características:
  - Usa `nodemon` para reiniciar el servidor al detectar cambios
  - Observa archivos en la carpeta `server/`
  - Ignora `node_modules`, `client`, `server/public`, y `server/cache`

### 🔁 Ambos simultáneos (full stack)
- Comando:
  ```bash
  npm run dev
  ```
- Usa `concurrently` para levantar frontend y backend en paralelo
- Colores en consola:
  - Verde → frontend
  - Cian → backend

---

## 🚀 Modo Producción

### 1. Construir frontend y copiar a `server/public`
```bash
npm run deploy
```

### 2. Levantar solo el backend (sirve también el frontend)
```bash
npm run start:backend
```

### 3. Ver en navegador
```
http://localhost:3001
```

---

## 🛠 Comandos disponibles (raíz)

| Comando              | Descripción                                            |
|----------------------|--------------------------------------------------------|
| `npm run dev`        | Levanta frontend + backend simultáneamente             |
| `npm run start:frontend` | Inicia solo React con hot reload                      |
| `npm run start:backend`  | Inicia solo backend en modo producción               |
| `npm run dev:backend`    | Inicia backend con `nodemon` (modo desarrollo)       |
| `npm run build`      | Construye el frontend                                 |
| `npm run clean`      | Elimina la carpeta `client/build`                     |
| `npm run deploy`     | Construye el frontend y lo copia a `server/public`    |

---

## 🔐 Seguridad y buenas prácticas

- El archivo `.env` contiene datos sensibles y **nunca debe subirse a Git**.
- El proyecto tiene configurado `.gitignore` para proteger `node_modules`, `.env`, y otras carpetas generadas.
- El repositorio es **público**, pero el `README.md` especifica que **no es open source** ni reutilizable sin permiso.

---

Este documento puede actualizarse a medida que evolucione la plataforma o cambien las herramientas utilizadas.