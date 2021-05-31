const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
const { log } = require('console');
const { json } = require('express');



const fileProductsPath = path.join(__dirname, '../../data/products.json'); /* Traemos el JSON de productos */
const products = JSON.parse(fs.readFileSync(fileProductsPath, 'utf-8'));

const productsController = {
	index: (req, res) => {
		res.render('productsIndex', { products: products });
	},

	detail: (req, res) => {
		res.render('productDetail', { productDetail: products.find((producto) => producto.id == req.params.id) });
	},

	create: (req, res) => {

		res.render('createProduct');
		
	},

	store: (req, res) => {
		
		
		let lalala = req.body //el formulario cargado por user, se agrega a la variable "nueva"
		let nuevo = JSON.stringify(lalala);//traduce para que append pueda cargar info
	
		fs.appendFileSync(fileProductsPath,nuevo); //push en idioma json hacia products.json
				
		/*		
		let superlala= json.parse(fileProductsPath)
		superlala.push(lalala);

		console.log(superlala);
		*/
		
		
	},




	edit: (req, res) => {
        res.render('editProduct',{ productEdit: products.find((producto) => producto.id == req.params.id)} )
    },

	update: (req, res) => {},

	destroy: (req, res) => {

		let nueva = products.filter(products => products.id != req.params.id)

		let nuevo = JSON.stringify(nueva, null, 4);

		fs.writeFileSync(fileProductsPath, nuevo)
		
        res.redirect('/products');
		
	}
};

module.exports = productsController;
