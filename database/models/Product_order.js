module.exports = (sequelize, dataTypes) => {
	let alias = 'Product_order'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		id_product: {
			type: Sequelize.INTEGER,
			references: {
				model: products,
				key: 'id'
			}
		},
		id_order: {
			type: Sequelize.INTEGER,
			references: {
				model: orders,
				key: 'id'
			}
		},
		quantity: {
			type: DataTypes.INTEGER
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'products_orders',
		timestamps: false
	};

	const Product_order = sequelize.define(alias, cols, config);
};
