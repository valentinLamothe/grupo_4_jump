const path = require('path');
const express = require('express');
const fs = require('fs'); /* Requerimos el módulo FS para leer distintos tipos de archivo */
const db = require('../database/models');
const { receiveMessageOnPort } = require('worker_threads');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { validationResult } = require('express-validator');
const { CLIENT_RENEG_LIMIT } = require('tls');

const productsController = {
	index: (req, res) => {
		db.Product.findAll().then(function (products) {
			return res.render('productsIndex', { products });
		});
	},
	detail: (req, res) => {
		db.Product.findByPk(req.params.id).then((productDetail) => {
			db.Category.findByPk(req.params.id).then((productCategory) => {
				db.Brand.findByPk(req.params.id).then((productBrand) => {
					return res.render('productDetail', { productBrand, productCategory, productDetail });
				});
			});
		});
	},
	create: (req, res) => {
		db.Category.findAll().then((productCategory) => {
			return res.render('createProduct', { productCategory });
		});
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
			image: req.file.filename
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
			db.Category.findAll().then((productCategory) => {
				return res.render('editProduct', { productEdit, productCategory });
			});
			//return res.render('editProduct', { productEdit });
		});
	},
	update: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			console.log(resultValidation.errors);
			db.Product.findByPk(req.params.id).then(function (productEdit) {
				db.Category.findAll().then((productCategory) => {
					return res.render('editProduct', { productEdit, productCategory, errors: resultValidation.mapped() });
				});
			});
		} else {
			let imagen;
			db.Product.findByPk(req.params.id).then(function (productEdit) {
				console.log(productEdit.dataValues);
				imagen = productEdit.dataValues.image;
			});
			if (req.file) {
				imagen = req.file.filename;
			}
			db.Product.update(
				{
					name: req.body.name,
					description: req.body.description,
					id_category: req.body.category,
					price: req.body.price,
					id_size: req.body.size,
					id_brands: req.body.brand,
					image: imagen
				},
				{
					where: {
						id: req.params.id
					}
				}
			)
				.then(() => {
					return res.redirect('/products');
				})
				.catch((e) => res.send(e));
		}
	},
	brand: (req, res) => {
		db.Brand.findAll({
			where: {
				name: req.query.search
				//id: req.query.brand
			}
		}).then((products) => res.render('productsIndex', { products }));
	}
};

module.exports = productsController;
