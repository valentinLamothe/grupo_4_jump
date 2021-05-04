

const express = require('express');
const path = require('path');
 
const app = express();
 
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));
 
app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});
 
app.get('/', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'views/index.html'))
})

app.get('/login', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'views/login.html'))
})

app.get('/carrito', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'views/productCart.html'))
})


app.get('/detalleproducto', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'views/productDetail/'))
})

app.get('/registro', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'views/register.html'))
})

