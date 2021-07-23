module.exports =(sequelize,dataTypes) => {
    let alias="Rol"; //nombre de indentificacion
    let cols={ //columnas de la base de datos
    id:{
    
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    
    },
    name: {
        type: DataTypes.STRING(100)
    }
    
};
    
    let config ={ //config base de datos para evitar errores
    
        tableName:"orders",
        timestamps: false
    };
    
    const Rols = sequelize.define(alias,cols,config);
    
}  


    
    