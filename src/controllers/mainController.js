const path = require('path');

const mainController = {
	index: (req, res) => {
		res.render('index');
	},
	login: (req, res) => {
		res.render('login');
	},
	productCart: (req, res) => {
		res.render('productCart');
	},
	productDetail: (req, res) => {
		res.render('productDetail');
	},
	newProduct: (req, res) => {
		res.render('newProduct');
	},
	editProduct: (req, res) => {
		res.render('editProduct');
	},
	register: (req, res) => {
		res.render('register');
	}
};

module.exports = mainController;
