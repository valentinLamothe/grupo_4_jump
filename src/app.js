
const express = require('express');
const path = require('path');
const app = express();

 
// Rutas
const mainRutas = require('./routers/main');


// Configuramos la carpeta publica
app.use(express.static(path.join(__dirname, '../public')));


// Configuramos el motor de vistas
app.set('view engine', 'ejs'); //le indicamos express cual es nuestro temple engine
app.set('views', path.join(__dirname, 'views'));

app.use('/', mainRutas);


app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});
