const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
const { log } = require('console');
const { json } = require('express');
const db = require('../../database/models');
const { receiveMessageOnPort } = require('worker_threads');
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

},
create:(req,res)=>{
res.render('createProduct')
},
store: (req, res) =>{ 
	db.Product.create({
	name:req.body.name,
	description: req.body.description, //lineas29 a 41 el create
	id_category: req.body.category,
	price: req.body.price,
	id_size: req.body.size,
	id_brands: req.body.brand
})
res.redirect('/products')
/*.then(()=> {
	console.log(req.body)
	return res.redirect('/products')})            
.catch(error => res.send(error))*/



},
delete:(req, res)=>{
	db.Product.destroy({
		where: {
			id:req.params.id
		}
	
	})
	return res.redirect('/products')
},
edit:(req,res)=>{
 db.Product.findAll()
 db.Product.findByPk(req.params.id)
 .then(function(productEdit){
	return res.render('editProduct',{productEdit})
 })
 .then(function(productEdit){
	return res.render('editProduct',{productEdit})
 })
	
},
update:(req,res)=>{
	db.Product.update({
		name:req.body.name,
		description: req.body.description, 
		id_category: req.body.category,
		price: req.body.price,
		id_size: req.body.size,
		id_brands: req.body.brand
	},
	{
		where:{
			id:req.params.id
		}
	})
	res.redirect('/products')
}
};
//console.log('newproduct'+ newProduct.id);
//console.log('generator'+ generateId);
module.exports = productsController;
