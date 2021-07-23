module.exports = (sequelize, dataTypes) => {
	let alias = 'Brand'; //nombre de indentificacion
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

		tableName: 'brands',
		timestamps: false
	};

	const Brands = sequelize.define(alias, cols, config);
};
