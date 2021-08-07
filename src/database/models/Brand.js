module.exports = (sequelize, dataTypes) => {
	let alias = 'Brand'; //nombre de indentificacion
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
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'brands',
		timestamps: false
	};

	const Brand = sequelize.define(alias, cols, config);

	Brand.associate = (models) => {
		Brand.hasMany(models.Product, {
			as: 'brand_product',
			foreignKey: 'id_brands',
			timestamps: false
		});
	};
	return Brand
};

