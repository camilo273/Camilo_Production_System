
const express = require('express');
const router = express.Router();

// TEMP: You can replace this with real controller code if needed
router.get('/', (req, res) => res.send('Purchase Requests route working'));
router.post('/', (req, res) => res.send('Purchase request created'));

module.exports = router;
