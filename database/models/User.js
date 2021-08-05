module.exports = (sequelize, dataTypes) => {
  let alias = "User"; //nombre de indentificacion
  let cols = {
    //columnas de la base de datos
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: dataTypes.INTEGER,
    },
    name: {
      type: dataTypes.STRING(100),
    },
    email: {
      type: dataTypes.STRING(100),
      unique: true,
    },
    password: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    avatar_image: {
      type: dataTypes.STRING(100),
    },
    id_rol_fk: {
			type: dataTypes.INTEGER
		},
    country: {
      type: dataTypes.STRING(100),
    },
    location: {
      type: dataTypes.STRING(100),
    }
  };

  let config = {
    //config base de datos para evitar errores

    tableName: "users",
    timestamps: false,
  };

  const User = sequelize.define(alias, cols, config);

  User.associate = (models) => {
    User.belongsTo(models.Rol, {
      as: "user_rol",
      foreignKey: "id_rol_fk",
    });
    User.hasMany(models.Order, {
      foreignKey: "id_user",
      as: "user_order",
    });
  };
  return User;
};
