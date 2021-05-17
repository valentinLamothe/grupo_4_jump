var express = require('express');
const mainController = require('../controllers/mainController');

var router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);
router.get('/newProduct', mainController.newProduct);
router.get('/editProduct', mainController.editProduct);
router.get('/register', mainController.register);

module.exports = router;
