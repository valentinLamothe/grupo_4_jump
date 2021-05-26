var express = require('express');
const mainController = require('../controllers/mainController');

var router = express.Router();

router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/newProduct', mainController.newProduct);
router.get('/editProduct', mainController.editProduct);
router.get('/register', mainController.register);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);

/* nuevo agregado Fabi*/
//router.get('/user', userController.test);//falta completar

module.exports = router;
