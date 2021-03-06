const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/products', apiController.products);
router.get('/products/:id', apiController.productId);

router.get('/users', apiController.users);
router.get('/users/:id', apiController.userId);

module.exports = router;
