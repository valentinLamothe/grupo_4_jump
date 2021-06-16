const path = require('path');
const bcryptjs = require('bcrypt');
const { validationResult } = require('express-validator');

const User = require(path.join(__dirname, '../../models/User'));

const controller = {
	register: (req, res) => {
		res.render('register');
	},
	processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename
		};

		User.create(userToCreate);
		return res.redirect('/user/login');
	},
	login: (req, res) => {
		res.render('login');
	},

	profile: (req, res) => {
		res.render('profile', {
			user: req.session.userLogged
		});
	},

	loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);

		if (userToLogin) {
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
		}
		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este mail en nuestra base de datos'
				}
			}
		});
	},
	logout: (req, res) => {
		req.session.destroy();
		return res.redirect('/')
	}
};

module.exports = controller;
