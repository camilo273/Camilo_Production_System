const { getLineasProductivas: getLineasProductivasFromCache } = require('../cache/lineasProductivasCache');

const getLineasProductivas = async (req, res) => {
  try {
    const data = getLineasProductivasFromCache();
    res.status(200).json(data);
  } catch (error) {
    console.error('❌ Error al obtener líneas productivas:', error);
    res.status(500).json({ message: 'Error al obtener líneas productivas' });
  }
};

module.exports = {
  getLineasProductivas,
};