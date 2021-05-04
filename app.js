
const express = require('express');
const app = express();
const path = require('path');
 
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));



app.listen(3001, () => {
   console.log('Servidor corriendo en el puerto 3000');
});
 
/*arreglado mediante get, el problema de ruteo*/
app.get('/public', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'./public'))
})

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
   res.sendFile(path.resolve(__dirname,'views/productDetail.html'))
})

app.get('/registro', (req, res)=> {
   res.sendFile(path.resolve(__dirname,'views/register.html'))
})

