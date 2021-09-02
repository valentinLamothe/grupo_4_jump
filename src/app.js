const express = require("express");
const process = require("process");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const cookies = require("cookie-parser");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const session = require("express-session");
const cors = require("cors");
const adminMiddleware = require('./middlewares/adminMiddleware')

// Rutas
const main = require("./routers/main");

const products = require("./routers/products"); //sin ruta creada, rompe el sitio

const user = require("./routers/user");

const api = require("./routers/api");
// Configuramos la carpeta publica
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(methodOverride("_method")); //Para usar http put y delete
app.use(cookies()); // guardar información del navegador desde lado del usuario
app.use(
  session({
    secret: "Shhhh", //guardar datos del usuario del lado del servidor
    resave: false, // sessión loggeada sigue activa
    saveUninitialized: false, //para loguear un visitante que tiene la información guardada en la base de datos
  })
);

app.use(userLoggedMiddleware);
app.use(adminMiddleware);

// Configuramos el motor de vistas
app.set("view engine", "ejs"); //le indicamos express cual es nuestro temple engine
app.set("views", path.join(__dirname, "views"));

app.use("/", main);
app.use("/products", products); //sin ruta creada, rompe el sitio
app.use("/user", user);
app.use("/api", api);

// Error 404

app.use((req, res, next)=>{
  res.status(404).render('404');
});

//Llamado del puerto

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
