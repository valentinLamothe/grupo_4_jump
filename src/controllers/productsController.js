const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
/* const { log } = require("console");
const { json } = require("express"); */
const db = require('../database/models');
const { receiveMessageOnPort } = require('worker_threads');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');

const productsController = {
	index: (req, res) => {
		db.Product.findAll().then(function (products) {
			return res.render('productsIndex', { products });
		});
	},
	detail: (req, res) => {
		db.Product.findByPk(req.params.id).then((productDetail) => {
			return res.render('productDetail', { productDetail });
		});
	},
	create: (req, res) => {
		res.render('createProduct');
	},
	store: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('createProduct', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		db.Product.create({
			name: req.body.name,
			description: req.body.description, //lineas29 a 41 el create
			id_category: req.body.category,
			price: req.body.price,
			id_size: req.body.size,
			id_brands: req.body.brand,
			image: req.body.filename
		})
			// res.redirect("/products");
			.then(() => {
				return res.redirect('/products');
			});
	},
	delete: (req, res) => {
		db.Product.destroy({
			where: {
				id: req.params.id
			}
		});
		return res.redirect('/products');
	},
	edit: (req, res) => {

		db.Product.findByPk(req.params.id).then(function (productEdit) {
			return res.render('editProduct', { productEdit });
		});
	},
	update: (req, res) => {
		
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('editProduct', {
				errors: resultValidation.mapped(),
				productEdit: req.body
			});
		}
		
		db.Product.update(
			{
				name: req.body.name,
				description: req.body.description,
				id_category: req.body.category,
				price: req.body.price,
				id_size: req.body.size,
				id_brands: req.body.brand
			},
			{
				where: {
					id: req.params.id
				}
			}
		)
		.then(() => {
			return res.redirect('/products');
		});
	}
};

module.exports = productsController;
