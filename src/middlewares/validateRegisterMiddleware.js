const { body } = require('express-validator');
const path = require('path');
var foto =  path.join(__dirname, '../../public/img/userDefault/userDefault.jpg')
console.log(foto);
const validations = [
	body('name').notEmpty().withMessage('El usuario no puede estar vacío').bail().isLength({ min: 2 }).withMessage('El usuario debe tener al menos 2 caracteres'),
	body('email').notEmpty().withMessage('El email no puede estar vacío').bail().isEmail().withMessage('No es un email válido'),
	body('avatar_image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
		if (!file) {
			req.file= foto 
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}),
	body('password')
		.notEmpty()
		.withMessage('La contraseña no puede estar vacía')
		.bail()
		.isLength({ min: 8 })
		.withMessage('La contraseña debe tener al menos 8 caracteres')
		.bail()
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
		.withMessage('La contraseña debe contener al menos un numero, un símbolo, una letra mayuscula y una letra minuscula'),
		body('password2').notEmpty().withMessage('La contraseña no puede estar vacía').bail().custom((value, { req }) => {
			if (value !== req.body.password) {
			  throw new Error('Password confirmation does not match password');
			}
		
			// Indicates the success of this synchronous custom validator
			return true;
		  }),
		
];

module.exports = validations;
