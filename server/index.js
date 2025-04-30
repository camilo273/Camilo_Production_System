// server/index.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products'); // 👈 Tus rutas de productos
const lineasProductivasRoutes = require('./routes/lineasProductivas');
const { loadLineasProductivas } = require('./cache/lineasProductivasCache');
const lineasComercialesRoutes = require('./routes/lineasComerciales');
const { loadLineasComerciales } = require('./cache/lineasComercialesCache');
const path = require('path');


// Si luego creas rutas como ventas, cotizaciones, etc., las importamos igual aquí

// 🔵 Inicializar dotenv para variables de entorno
dotenv.config();

// 🔵 Crear aplicación express
const app = express();

// 🔵 Middlewares
app.use(cors());               // Permitir llamadas de otros orígenes (como localhost:3000)
app.use(express.json());        // Parsear JSON automáticamente

app.use(express.static(path.join(__dirname, 'public')));

// 🔵 Definición de rutas
app.use('/api/products', productRoutes);
app.use('/api/lineasproductivas', lineasProductivasRoutes);
app.use('/api/lineascomerciales', lineasComercialesRoutes);
// Ejemplo futuro: app.use('/api/cotizaciones', cotizacionesRoutes);
// Ejemplo futuro: app.use('/api/ventas', ventasRoutes);

// 🔵 Ruta base para confirmar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('✅ Camilo Production System Backend Running');
});

// 🔵 Middleware de manejo de errores general (por si algo falla)
app.use((err, req, res, next) => {
  console.error('❌ Error no manejado:', err.stack);
  res.status(500).send('Error interno del servidor');
});


// 🔵 En producción, servir el index.html para cualquier ruta que no sea API
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next(); // no atrapar rutas de API
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔵 Levantar el servidor
const PORT = process.env.PORT || 3001;

loadLineasProductivas();
loadLineasComerciales();

app.listen(PORT, () => {
  console.log(`🚀 Backend escuchando en http://localhost:${PORT}`);
});