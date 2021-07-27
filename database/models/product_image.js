module.exports = (sequelize, dataTypes) => {
	let alias = 'Product_image'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING(100),
			allowNull: false
		},
		id_product: {
			type: dataTypes.INTEGER
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'product_images',
		timestamps: false
	};

	const Product_image = sequelize.define(alias, cols, config);

	Product_image.associate = (models) => {
		Product_image.belongsTo(models.Product, {
			as: 'image_product',
			foreignKey: 'id_product_fk2',
			timestamps: false
		});
	};
return Product_image;
};
