module.exports = (sequelize, dataTypes) => {
	let alias = 'Size'; //nombre de indentificacion
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
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'sizes',
		timestamps: false
	};

	const Sizes = sequelize.define(alias, cols, config);

	Sizes.associate = (models) => {
		Sizes.hasMany(models.Product, {
			as: 'size_product',
			timestamps: false
		});
	};
};
