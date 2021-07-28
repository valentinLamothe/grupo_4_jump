module.exports = (sequelize, dataTypes) => {
	let alias = 'Product_order'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		id_product: {
			type: dataTypes.INTEGER
		},
		id_order: {
			type: dataTypes.INTEGER
		},
		quantity: {
			type: dataTypes.INTEGER
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'products_orders',
		timestamps: false
	};

	const Product_order = sequelize.define(alias, cols, config);
	return Product_order
};
