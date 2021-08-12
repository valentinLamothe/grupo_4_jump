const { body } = require('express-validator');
const path = require('path');

const validations = [
	body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Debes escribir un correo electronico valido'),
	body('name').notEmpty().withMessage('Tienes que escribir un nombre de usuario').bail().isLength({ min: 2 }).withMessage('El usuario debe tener al menos 2 caracteres'),
	body('password')
		.notEmpty()
		.withMessage('Tienes que escribir una contraseña')
		.bail()
		.isLength({ min: 8 })
		.withMessage('La contraseña debe tener al menos 8 caracteres')
		.bail()
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
		.withMessage('La contraseña debe contener al menos un numero, una letra mayuscula y una letra minuscula'),
	body('avatar_image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
];

module.exports = validations;
