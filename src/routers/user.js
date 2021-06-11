const express = require ('express');
const path = require ('path');
const router = express.Router();
//controller
const usersController = require('../controllers/usersController')

//middlewares
const uploadFile = require('../../middlewares/multerMiddleware')


//Formulario de registro
router.get('/register',usersController.register)

//Procesar el registro 
router.post('/register', uploadFile.single('avatar') ,usersController.processRegister)

//Formulario login 
router.get('/login',usersController.login)

//Procesar el login 
router.post('/login')

//Perfil de usuario 
router.get('/profile')

// Log Out 
router.get('/logOut')

module.exports= router