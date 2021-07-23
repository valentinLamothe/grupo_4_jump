module.exports =(sequelize,dataTypes)=>{
    let alias="Products_colors"; //nombre de indentificacion
    let cols={ //columnas de la base de datos
    id:{
    
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    
    },
    id_product_fk: {
        type: Sequelize.INTEGER,
     
        references: {
          // aca ponemos la tabla a la cual se vincula
          model: Products,
     
          // detallamos que columna de esa tabla toma de referencia
          key: 'id',
        }},
         
    id_color: {
        type: Sequelize.INTEGER,
     
        references: {
          // aca ponemos la tabla a la cual se vincula
          model: Color,
     
          // detallamos que columna de esa tabla toma de referencia
          key: 'id',
        }}
      };
    
    
    
    
    
    let config ={ //config base de datos para evitar errores
    
        tableName:"products_Colors",
        timestamps: false
    };
    
    const product_color = sequelize.define(alias,cols,config);
    
    
    
  }