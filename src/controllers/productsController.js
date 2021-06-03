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

	store: (req, res) => 
	{
				
		let poderosa = {
			...req.body,
			image: req.file.filename
		} //El formulario cargado por user, se agrega a la variable "lalala"
		
		let identidad = fs.readFileSync(fileProductsPath,{encoding:"utf-8"});//products.json se agrega a la variable "identidad"
		
		let lalala = JSON.parse(identidad);//descomprime el JSON y se convierte en objeto
		lalala.push(poderosa); //agregamos la info "poderosa" del formulario en el nuevo objeto
		
		let superlala = JSON.stringify(lalala, null, 4); //convertimos el objeto en formato json
		fs.writeFileSync(fileProductsPath, superlala) // pisamos el viejo products.json por "superlala" que tiene la nueva info del formulario

		res.redirect('/products');

	},



	edit: (req, res) => {
        res.render('editProduct',{ productEdit: products.find((producto) => producto.id == req.params.id)} )
    },

	update: (req, res) => {
		
		
		
		let poderosa = req.body //El formulario cargado por user, se agrega a la variable "lalala"
		
		//id.push(poderosa);
		let nueva = products.filter(products => products.id != req.params.id)//json sin el archivo actual donde estamos parados.

		nueva.push(poderosa);
	
		res.send(nueva);
		

		let nuevo = JSON.stringify(nueva, null, 4);

		fs.writeFileSync(fileProductsPath, nuevo)

		
		/*let identidad = fs.readFileSync(fileProductsPath,{encoding:"utf-8"});//products.json se agrega a la variable "identidad"
		
		let lalala = JSON.parse(identidad);//descomprime el JSON y se convierte en objeto
		
		let superlala = JSON.stringify(lalala, null, 4); //convertimos el objeto en formato json
		fs.writeFileSync(fileProductsPath, superlala) // pisamos el viejo products.json por "superlala" que tiene la nueva info del formulario
*/
	},

	destroy: (req, res) => {

		let nueva = products.filter(products => products.id != req.params.id)

		let nuevo = JSON.stringify(nueva, null, 4);

		fs.writeFileSync(fileProductsPath, nuevo)
		
        res.redirect('/products');
		
	}
};

module.exports = productsController;
