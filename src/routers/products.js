const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');



router.get('/products', productController.index);//listado productos
router.get('/products/create', productController.create);//creacion de productos
router.get('/products/:id', productController.detail);//detalle individual producto
router.post('/products', productController.store);//direccion de creacion(donde apunta el formulario)
router.get('/products/:id/edit', productController.edit);//formulario edicion producto
router.put('/products/:id', productController.update);// accion de edicion (donde apunta el formulario)
router.delete('/:id',productController.delete);//borra producto especifico

module.exports = router;