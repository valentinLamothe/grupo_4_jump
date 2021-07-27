module.exports = (sequelize, dataTypes) => {
	let alias = 'Category'; //nombre de indentificacion
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

		tableName: 'categories',
		timestamps: false
	};

	const Category = sequelize.define(alias, cols, config);

	Category.associate = (models) => {
		Category.hasMany(models.Product, {
			as: 'category_product',
			foreignKey: 'category_id',
			timestamps: false
		});
	};
	return Category
};
