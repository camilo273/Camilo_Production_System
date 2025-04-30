const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas de productos existentes
router.get('/', productController.getAllProducts);
router.post('/paginated', productController.getPaginatedProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.post('/prepare', productController.prepareNewProduct);
router.post('/save', productController.saveProduct);

module.exports = router;