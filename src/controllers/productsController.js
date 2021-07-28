const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
const { log } = require('console');
const { json } = require('express');
const db = require('../../database/models')
const sequelize = db.sequelize




const productsController = {
index:(req , res)=> {
	db.Product.findAll()
	.then(function(products){
		return res.render('productsIndex',{products})
	
	})
	
},
detail: (req, res)=>{
	db.Product.findByPk(req.params.id)
		.then(productDetail => {
			return  res.render('productDetail', {productDetail});
		
		});

}
	
};
//console.log('newproduct'+ newProduct.id);
//console.log('generator'+ generateId);
module.exports = productsController;
