const { poolConnect } = require('../config/db');

let lineasComerciales = [];

const loadLineasComerciales = async () => {
  try {
    const pool = await poolConnect;
    const result = await pool.request().query(`
      SELECT 
        crce7_t_lineacomercialid AS id,
        crce7_label AS nombre
      FROM crce7_t_lineacomercial
      WHERE crce7_eliminado IS NULL OR crce7_eliminado = 0
      ORDER BY crce7_label
    `);
    lineasComerciales = result.recordset;
    console.log(`✅ Caché de líneas comerciales cargada con ${lineasComerciales.length} registros`);
  } catch (err) {
    console.error('❌ Error cargando línea comercial cache:', err);
  }
};

const getCachedLineasComerciales = () => lineasComerciales;

module.exports = {
  loadLineasComerciales,
  getCachedLineasComerciales,
};