var express = require('express');
const mainController = require('../controllers/mainController');

var router = express.Router();

router.get('/', mainController.index);
router.get('/productCart', mainController.productCart);




module.exports = router;
