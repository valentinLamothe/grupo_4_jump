const User = require("./User");

module.exports = (sequelize, dataTypes) => {
	let alias = 'Order'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		id_user: {
			type: dataTypes.INTEGER
			
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'orders',
		timestamps: false
	};

	const Order = sequelize.define(alias, cols, config);

	Order.associate = (models) => {
		Order.belongsToMany(models.Product, {
			as: 'order_product',
			through: 'products_orders',
			foreignKey: 'id_product',
			otherKey: 'id_order',
			timestamps: false
		});
		Order.belongsTo(models.User, {
			as: 'order_user',
			foreignKey: 'id_user',
			timestamps: false
		});
	};
	return Order
};
