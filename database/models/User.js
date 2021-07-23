module.exports =(sequelize,dataTypes) => {
    let alias="User"; //nombre de indentificacion
    let cols={ //columnas de la base de datos
    id:{
    
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    
    },
    name:{
    type: DataTypes.STRING(100),
    allowNull: false
    
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    avatar_image: {
        type: DataTypes.STRING(100),
    },
    id_rol: {
        type: Sequelize.INTEGER,
        references: {
            model: rols,
            key: 'id'
    },
    country: {
        type: DataTypes.STRING(100)
    },
    location: {
        type: DataTypes.STRING(100)
    }}
    
};
    
    
    
    let config ={ //config base de datos para evitar errores
    
        tableName:"users",
        timestamps: false
    };
    
    const Users = sequelize.define(alias,cols,config);
    
}  


    
    