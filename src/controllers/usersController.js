const path = require('path');
const bcryptjs = require('bcrypt');
const { validationResult } = require('express-validator');
//const User = require(path.join(__dirname, "../../models/User"));
// base de datos -- llamado
const db = require('../database/models');
const { receiveMessageOnPort } = require('worker_threads');
const sequelize = db.sequelize;
// fin de llamado

const controller = {
	register: (req, res) => {
		res.render('register');
	}, // se mantiene

	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		db.User.create({
			name: req.body.name,
			email: req.body.email,
			password: bcryptjs.hashSync(req.body.password, 10),
			password2: req.body.password2,
			avatar_image: req.file.filename,
			country: req.body.country,
			location: req.body.location
			// id_rol_fk: req.body.id_rol_fk
		});

		res.redirect('/user/login');
	},

	login: (req, res) => {
		res.render('login');
	},
	loginProcess: (req, res) => {
		db.User.findOne({
			where: {
				email: req.body.email
			}
		}).then((userToLogin) => {
			let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkPassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				return res.redirect('/user/profile');
			}
			return res.render('login', {
				errors: {
					email: {
						msg: 'las credenciales son invalidas'
					}
				}
			});
			// return res.render('login', {
			// 	errors: {
			// 		email: {
			// 			msg: 'No se encuentra este mail en nuestra base de datos'
			// 		}
			// 	}
			// });
		});
	},
	profile: (req, res) => {
		// db.User.findOne().then(function(user) {
		//   return res.render('profile',{user})
		// })
		console.log(req.session.userLogged);
		return res.render('profile', { user: req.session.userLogged });
	},
	logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/');
	}
};

module.exports = controller;
