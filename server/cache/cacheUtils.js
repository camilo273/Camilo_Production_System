// server/cache/cacheUtils.js
const fs = require('fs');
const path = require('path');

function readCache(fileName) {
  const filePath = path.join(__dirname, fileName);
  if (!fs.existsSync(filePath)) return null;

  const cache = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  if (now - cache.timestamp < oneDay) {
    return cache.data;
  }

  return null;
}

function saveCache(fileName, data) {
  const filePath = path.join(__dirname, fileName);
  const cache = {
    timestamp: Date.now(),
    data
  };
  fs.writeFileSync(filePath, JSON.stringify(cache), 'utf-8');
}

module.exports = { readCache, saveCache };
