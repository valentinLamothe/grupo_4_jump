module.exports = (sequelize, dataTypes) => {
	let alias = 'Size'; //nombre de indentificacion
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

		tableName: 'sizes',
		timestamps: false
	};

	const Size = sequelize.define(alias, cols, config);

	Size.associate = (models) => {
		Size.hasMany(models.Product, {
			as: 'size_product',
			timestamps: false
		});
	};
	return Size
};
