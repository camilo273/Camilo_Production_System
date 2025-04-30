const fs = require('fs');
const path = require('path');

const CACHE_DIR = path.resolve(__dirname);
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Guarda los datos en un archivo JSON con marca de tiempo
function saveCache(filename, data) {
  const fullPath = path.join(CACHE_DIR, filename);
  const cacheObject = {
    timestamp: Date.now(),
    data
  };
  fs.writeFileSync(fullPath, JSON.stringify(cacheObject, null, 2));
}

// Intenta cargar la caché si existe y no ha expirado
function loadCache(filename) {
  const fullPath = path.join(CACHE_DIR, filename);
  if (!fs.existsSync(fullPath)) return null;

  try {
    const raw = fs.readFileSync(fullPath, 'utf-8');
    const { timestamp, data } = JSON.parse(raw);
    if (Date.now() - timestamp < ONE_DAY_MS) {
      return data;
    }
    return null;
  } catch (err) {
    console.error('❌ Error leyendo la caché:', err);
    return null;
  }
}

module.exports = {
  saveCache,
  loadCache
};
