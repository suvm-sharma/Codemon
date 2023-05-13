const express = require('express');
const productController = require('../controllers/productController');

const router = express();

router.post('/createProduct', productController.createProduct);
router.get('/getAllProduct', productController.getAllProduct);

router
  .route('/:id')
  .patch(productController.updateProduct)
  .get(productController.getProduct);

module.exports = router;
