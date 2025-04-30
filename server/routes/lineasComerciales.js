const express = require('express');
const router = express.Router();
const { getLineasComerciales } = require('../cache/lineasComercialesCache');

router.get('/', (req, res) => {
  try {
    const data = getLineasComerciales();
    res.json(data);
  } catch (error) {
    console.error('❌ Error al obtener líneas comerciales desde caché:', error);
    res.status(500).json({ error: 'Error al obtener las líneas comerciales' });
  }
});

module.exports = router;