# Camilo Production System

> Plataforma empresarial desarrollada en React + Node.js + SQL Server para la gestión integral de productos, con enfoque en escalabilidad, eficiencia y experiencia de usuario.

---

## 🚀 Descripción

Este proyecto es una aplicación full stack que permite visualizar, crear y gestionar productos con una experiencia moderna basada en scroll infinito, filtros en tiempo real y arquitectura modular. Fue diseñado como parte de un sistema interno para una empresa industrial con más de 2.000 referencias únicas.

---

## 🧩 Tecnologías utilizadas

- **Frontend**: React.js (Vite), Hooks, componentes reutilizables
- **Backend**: Node.js + Express
- **Base de datos**: SQL Server (Azure)
- **Autenticación y configuración**: Variables de entorno con `.env`
- **Estilo de código**: Programación modular, DRY, estructura MVC
- **Despliegue local**: Vite + nodemon
- **Caché**: JSON file caching para rendimiento

---

## 📦 Funcionalidades principales

- ✅ Scroll infinito con carga dinámica de productos
- 🔍 Búsqueda por nombre y filtrado por línea productiva
- 📄 Creación de productos y referencias con validaciones
- 🧠 Sistema inteligente que construye códigos a partir de reglas de negocio
- 💾 Caché de datos para optimizar la carga
- 🧱 Separación clara de backend y frontend
- 📁 `.gitignore` y `.env` correctamente gestionados

---

## 📷 Capturas

<!-- Agrega tus imágenes aquí si las tienes -->
<!-- ![Captura 1](ruta-a-la-imagen) -->

---

## 🔧 Instalación local

1. Clona el repositorio

```bash
git clone https://github.com/camilo273/Camilo_Production_System.git
cd Camilo_Production_System
```

2. Instala dependencias del frontend y backend

```bash
cd client
npm install
cd ../server
npm install
```

3. Configura las variables de entorno (`.env`) en `/server`:

```env
SQL_SERVER=tu-servidor.database.windows.net
SQL_DATABASE=Database_Reflex
SQL_USER=usuario
SQL_PASSWORD=clave
PORT=3001
```

4. Ejecuta el backend:

```bash
cd server
npm start
```

5. Ejecuta el frontend:

```bash
cd client
npm run dev
```

---

## 📝 Licencia

Todo el contenido de este repositorio es propiedad de **Juan Camilo Becerra Restrepo**.  
No se permite su uso, copia, modificación o distribución sin consentimiento explícito del autor.

---

## 🙋 Sobre el autor

**Juan Camilo Becerra Restrepo**  
Ingeniero civil con pasión por la tecnología, automatización y desarrollo web.  
🔗 [LinkedIn](https://www.linkedin.com/in/juan-camilo-becerra-restrepo/)
