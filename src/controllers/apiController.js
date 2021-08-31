const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const apiController = {
	users: (req, res) => {
		db.User.findAll().then(function (user) {
			return res.status(200).json({
				count: user.length,
				users: user
			});
		});
	},
	userId: (req, res) => {
		db.User.findByPk(req.params.id).then(function (user) {
			return res.status(200).json(user);
		});
	},
	products: (req, res) => {
		db.Category.findAll({ include: { all: true } }).then((category) => {
			// esto recorre todo
			const dato = category.map((category) => {
				return {
					/* id: category.id, */
					[category.name]: category.dataValues.category_product.length
				};
			});
			// empieza
			db.Product.findAll().then(function (products) {
				return res.status(200).json({
					count: products.length,
					countByCategory: dato,
					products: products
				});
			});
			//termina
		});
	}, // fin de products
	productId: (req, res) => {
		db.Product.findByPk(req.params.id).then(function (products) {
			return res.status(200).json(products);
		});
	}
};

module.exports = apiController;
