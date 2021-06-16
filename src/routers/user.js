const express = require ('express');
const path = require ('path');
const router = express.Router();
//controller
const usersController = require('../controllers/usersController')

const { body } = require('express-validator');

//middlewares
const uploadFile = require('../../middlewares/multerMiddleware');
const validations = require('../../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../../middlewares/guestMiddleware');
const authMiddleware = require('../../middlewares/authMiddleware');

//Formulario de registro
router.get('/register', guestMiddleware ,usersController.register)

//Procesar el registro 
router.post('/register', uploadFile.single('avatar'), validations ,usersController.processRegister)

//Formulario login 
router.get('/login', guestMiddleware ,usersController.login)

//Procesar el login 
router.post('/login', usersController.loginProcess)

//Perfil de usuario 
router.get('/profile', authMiddleware ,usersController.profile)

// Log Out 
router.get('/logout', usersController.logout)

module.exports= router