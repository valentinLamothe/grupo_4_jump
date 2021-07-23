module.exports =(sequelize,dataTypes)=>{
let alias="Product"; //nombre de indentificacion
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
description:{
    type: DataTypes.STRING
},
id_category: {
    type: Sequelize.INTEGER,
 
    references: {
      // aca ponemos la tabla a la cual se vincula
      model: Category,
 
      // detallamos que columna de esa tabla toma de referencia
      key: 'id',
    }},
     
price:{
    type: DataTypes.FLOAT,
},
id_size: {
    type: Sequelize.INTEGER,
 
    references: {
      // aca ponemos la tabla a la cual se vincula
      model: Size,
 
      // detallamos que columna de esa tabla toma de referencia
      key: 'id',
    }},
    id_brands: {
        type: Sequelize.INTEGER,
     
        references: {
          // aca ponemos la tabla a la cual se vincula
          model: brand,
     
          // detallamos que columna de esa tabla toma de referencia
          key: 'id',
        }},

};




let config ={ //config base de datos para evitar errores

    tableName:"products",
    timestamps: false
};

const Products = sequelize.define(alias,cols,config);


}