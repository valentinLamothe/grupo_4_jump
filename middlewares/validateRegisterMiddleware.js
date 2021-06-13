const {body} = require('express-validator')
const path = require('path');

const validations = [
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Debes escribir un correo electronico valido'),
    body('usuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg'];
        if(!file) {
            throw new Error('Tienes que subir una imagen')
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