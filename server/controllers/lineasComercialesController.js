const { getLineasComerciales: getLineasComercialesFromCache } = require('../cache/lineasComercialesCache');

const getLineasComerciales = async (req, res) => {
  try {
    const data = getLineasComercialesFromCache();
    res.status(200).json(data);
  } catch (error) {
    console.error('❌ Error al obtener líneas comerciales:', error);
    res.status(500).json({ message: 'Error al obtener líneas comerciales' });
  }
};

module.exports = {
  getLineasComerciales,
};
