const path = require('path');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */

const fileProductsPath = path.join(__dirname, '../../src/data/products.json') /* Traemos el JSON de productos */
const products = JSON.parse(fs.readFileSync(fileProductsPath, 'utf-8'))

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
	}
};

module.exports = mainController;
