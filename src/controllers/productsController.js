const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */

const fileProductsPath = path.join(__dirname, '../../data/products.json'); /* Traemos el JSON de productos */
const products = JSON.parse(fs.readFileSync(fileProductsPath, 'utf-8'));

const productsController = {
	index: (req, res) => {
		res.render('productsIndex', { products: products });
	},

	detail: (req, res) => {
		res.render('productDetail', { productDetail: products.find((producto) => producto.id == req.params.id) });
	},

	create: (req, res) => {},

	store: (req, res) => {},

	edit: (req, res) => {
        res.render('editProduct',{ productEdit: products.find((producto) => producto.id == req.params.id)} )
    },

	update: (req, res) => {},

	destroy: (req, res) => {}
};

module.exports = productsController;
