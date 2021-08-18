const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Controlador
const productsController = require('../controllers/productsController');

//Middleware
const productValidator = require('../middlewares/validateProductMiddleware');
const productEditValidator = require('../middlewares/validateProductEditMiddleware');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, '../../public/img/productos'));
	},
	filename: (req, file, cb) => {
		cb(null, 'product-' + Date.now() + path.extname(file.originalname));
	}
});

const uploadFile = multer({ storage });

router.get('/', productsController.index); //listado productos
router.get('/create/', productsController.create); //creacion y validación de productos

router.get('/:id/', productsController.detail); // detalle individual producto
router.get('/:id/edit', productsController.edit); // formulario edicion producto
router.delete('/:id', productsController.delete); //borra producto especifico

router.post('/', uploadFile.single('image'), productValidator, productsController.store); // direccion de creacion(donde apunta el formulario)

router.put('/:id', productEditValidator  ,productsController.update); //accion de edicion (donde apunta el formulario)

module.exports = router;
