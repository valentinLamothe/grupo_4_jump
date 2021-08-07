module.exports = (sequelize, dataTypes) => {
	let alias = 'Product_color'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		id_product_fk: {
			type: dataTypes.INTEGER
		},

		id_color: {
			type: dataTypes.INTEGER
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'products_colors',
		timestamps: false
	};

	const Product_color = sequelize.define(alias, cols, config);

	Product_color.associate = (models) => {
		Product_color.belongsToMany(models.Product, {
			as: 'product_color_product',
			through: 'products_colors',
			foreignKey: 'id_product_fk',
			otherKey: 'id_color',
			timestamps: false
		});
	};
	return Product_color
};
