const express = require('express');
const router = express.Router();
const { getLineasProductivas } = require('../controllers/lineasProductivasController');

router.get('/', getLineasProductivas);

module.exports = router;