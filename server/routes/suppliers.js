
const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplierController');

router.get('/', controller.getSuppliers);
router.post('/', controller.createSupplier);

module.exports = router;
