const path = require('path');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
/*const db = require('../../database/models');
const sequelize = db.sequelize*/
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../database/models');

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

	register: (req, res) => {
		res.render('register');
	},
	search: (req, res) => {
		db.Product.findAll({
			where: {
				name: { [Op.like]: '%' + req.query.search + '%' }
			}
		}).then((products) => {
			db.Brand.findAll().then((productBrand) => {
				db.Category.findAll().then((productCategory) => {
					return res.render('productsIndex', {products, productBrand, productCategory})
				})
			})
		});
	}
};

module.exports = mainController;
