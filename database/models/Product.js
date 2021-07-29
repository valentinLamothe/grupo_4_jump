module.exports = (sequelize, dataTypes) => {
	let alias = 'Product'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING(100),
			
		},
		description: {
			type: dataTypes.STRING
		},
		id_category: {
			type: dataTypes.INTEGER

		},

		price: {
			type: dataTypes.FLOAT
		},
		id_size: {
			type: dataTypes.INTEGER
		},
		id_brands: {
			type: dataTypes.INTEGER
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'products',
		timestamps: false
	};

	const Product = sequelize.define(alias, cols, config);

	Product.associate = (models) => {
		Product.belongsTo(models.Category, {
			as: 'product_category',
			foreignKey: 'id_category'
		});
		Product.belongsTo(models.Size, {
			as: 'product_size',
			foreignKey: 'id_size'
		});
		Product.belongsTo(models.Brand, {
			as: 'product_brand',
			foreignKey: 'id_brands'
		});
		Product.hasMany(models.Product_image, {
			as: 'product_image',
			foreignKey: 'id_product',
			timestamps: false
		});
		Product.belongsToMany(models.Order, {
			as: 'product_order',
			through: 'products_orders',
			foreignKey: 'id_product',
			otherKey: 'id_order',
			timestamps: false
		});
		Product.belongsToMany(models.Color, {
			as: 'color_product',
			through: 'products_colors',
			foreignKey: 'id_color',
			otherKey: 'id_products_fk',
			timestamps: false
		});
	};
	return Product
};
