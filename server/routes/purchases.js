
const express = require('express');
const router = express.Router();

// TEMP: You can replace this with real controller code if needed
router.get('/', (req, res) => res.send('Purchases route working'));
router.post('/fulfill', (req, res) => res.send('Fulfillment logic here'));

module.exports = router;
