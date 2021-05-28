const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');



router.get('/', productsController.index);//listado productos
/* router.get('/create', productController.create);//creacion de productos
router.get('/:id', productController.detail);//detalle individual producto
router.post('/products', productController.store);//direccion de creacion(donde apunta el formulario)
router.get('/:id/edit', productController.edit);//formulario edicion producto
router.put('/:id', productController.update);// accion de edicion (donde apunta el formulario)
router.delete('/:id',productController.delete);//borra producto especifico */

module.exports = router;