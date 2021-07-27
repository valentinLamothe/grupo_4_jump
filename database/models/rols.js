module.exports = (sequelize, dataTypes) => {
	let alias = 'Rol'; //nombre de indentificacion
	let cols = {
		//columnas de la base de datos
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: dataTypes.INTEGER
		},
		name: {
			type: dataTypes.STRING(100)
		}
	};

	let config = {
		//config base de datos para evitar errores

		tableName: 'orders',
		timestamps: false
	};

	const Rol = sequelize.define(alias, cols, config);

	Rol.associate = (models) => {
		Rol.hasMany(models.User, {
			as: 'rol_user',
			timestamps: false
		});
	};
	return Rol
};
