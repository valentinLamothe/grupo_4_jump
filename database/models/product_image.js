module.exports = (sequelize, dataTypes) => {
	let alias = 'Product_image'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		id_product: {
			type: Sequelize.INTEGER,

			references: {
				// aca ponemos la tabla a la cual se vincula
				model: Product,

				// detallamos que columna de esa tabla toma de referencia
				key: 'id'
			}
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
};
