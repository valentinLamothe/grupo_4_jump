module.exports =(sequelize,dataTypes)=>{
    let alias="Category"; //nombre de indentificacion
    let cols={ //columnas de la base de datos
    id:{
    
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    
    },
    name:{
    type: DataTypes.STRING(100),
    allowNull: false
    }

}
let config ={ //config base de datos para evitar errores
    
        tableName:"categories",
        timestamps: false
    };
    
    const categories = sequelize.define(alias,cols,config);
    
    
    }
