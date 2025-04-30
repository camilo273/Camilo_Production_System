const { poolConnect, sql } = require('../config/db');
const { readCache, saveCache } = require('./cacheUtils');
const CACHE_KEY = 'lineasComerciales';

// ✅ Carga inicial: solo se ejecuta si la caché está vencida o vacía
async function loadLineasComerciales() {
  const cached = readCache(CACHE_KEY);
  if (cached) {
    console.log('✅ Cargando líneas comerciales desde caché');
    return;
  }

  console.log('🔄 Caché vencida o ausente. Consultando base de datos...');
  try {
    const pool = await poolConnect;
    const result = await pool.request()
      .query('SELECT Value AS id, Label AS nombre FROM T_Linea_comercial');

    const data = result.recordset;
    saveCache(CACHE_KEY, data);
    console.log('💾 Líneas comerciales guardadas en caché correctamente');
  } catch (error) {
    console.error('❌ Error al cargar líneas comerciales desde SQL:', error);
  }
}

// 🧠 Función de acceso: siempre devuelve datos desde disco (sin consultar SQL)
function getLineasComerciales() {
  const cached = readCache(CACHE_KEY);
  return cached || []; // si hay error o expiró, devuelve array vacío
}

module.exports = {
  loadLineasComerciales,
  getLineasComerciales,
};