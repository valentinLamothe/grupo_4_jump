module.exports =(sequelize,dataTypes) => {
    let alias="Order"; //nombre de indentificacion
    let cols={ //columnas de la base de datos
    id:{
    
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    
    },
    id_user: {
        type: Sequelize.INTEGER,
        references: {
            model: users,
            key: 'id'
        }}
    
};
    
    
    
    let config ={ //config base de datos para evitar errores
    
        tableName:"orders",
        timestamps: false
    };
    
    const Orders = sequelize.define(alias,cols,config);
    
}  


    
    