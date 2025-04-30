const { poolConnect, sql } = require('../config/db');
const { readCache, saveCache } = require('./cacheUtils');
const CACHE_KEY = 'lineasProductivas';

// ✅ Carga inicial: solo se ejecuta si la caché está vencida o vacía
async function loadLineasProductivas() {
  const cached = readCache(CACHE_KEY);
  if (cached) {
    console.log('✅ Cargando líneas productivas desde caché');
    return;
  }

  console.log('🔄 Caché vencida o ausente. Consultando base de datos...');
  try {
    const pool = await poolConnect;
    const result = await pool.request()
      .query('SELECT crce7_t_lineaproductivaid AS id, crce7_lineaproductiva AS nombre, crce7_color AS color FROM crce7_t_lineaproductiva');

    const data = result.recordset;
    saveCache(CACHE_KEY, data);
    console.log('💾 Líneas productivas guardadas en caché correctamente');
  } catch (error) {
    console.error('❌ Error al cargar líneas productivas desde SQL:', error);
  }
}

// 🧠 Función de acceso: siempre devuelve datos desde disco (sin consultar SQL)
function getLineasProductivas() {
  const cached = readCache(CACHE_KEY);
  return cached || []; // si hay error o expiró, devuelve array vacío
}

module.exports = {
  loadLineasProductivas,
  getLineasProductivas,
};