const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
const { log } = require('console');
const { json } = require('express');



const fileProductsPath = path.join(__dirname, '../../data/products.json'); /* Traemos el JSON de productos */
const products = JSON.parse(fs.readFileSync(fileProductsPath, 'utf-8'));

const productsController = {

	generateId: function(id) {
        
        let lastProducts = products.pop();
        if (lastProducts) {
            return lastProducts.id + 1;
        }
        return 1;
		
		
    },
	

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
				
		let newProduct = {
			id:productsController.generateId(),
			...req.body,
			image: req.file.filename
			
		} //El formulario cargado por user, 
		
			
		let newJson = JSON.parse(fs.readFileSync(fileProductsPath,{encoding:"utf-8"}));//descomprime el JSON y se convierte en objeto
		newJson.push(newProduct); //agregamos la info "poderosa" del formulario en el nuevo objeto
						
		fs.writeFileSync(fileProductsPath, JSON.stringify(newJson, null, 4)) // pisamos el viejo products.json por "superlala" que tiene la nueva info del formulario

		res.redirect('/products');

	},

	edit: (req, res) => {
        res.render('editProduct',{ productEdit: products.find((producto) => producto.id == req.params.id)} )
    },

	update: (req, res) => {
		
		let editProduct={
			
			id:Number(req.params.id), //necesario para que id se mantenga como un numero
			...req.body
		}//El formulario cargado por user con el id original
		
		let nueva = products.filter(products => products.id != req.params.id)//elimina prducto original
		
		nueva.push(editProduct);//agregamos el producto editado al json (linea72)
		
		nueva.sort(function(a, b) {return a.id - b.id; }); //ordena array de objetos, necesario para futuro no romper el generateID
	

		fs.writeFileSync(fileProductsPath, JSON.stringify(nueva, null, 4));//remplaza "nueva" en nuestra base "products.json"
	},

	destroy: (req, res) => {

		let nueva = products.filter(products => products.id != req.params.id)

		let nuevo = JSON.stringify(nueva, null, 4);

		fs.writeFileSync(fileProductsPath, nuevo)
		
        res.redirect('/products');
		
	}
};
//console.log('newproduct'+ newProduct.id);
//console.log('generator'+ generateId);
module.exports = productsController;
