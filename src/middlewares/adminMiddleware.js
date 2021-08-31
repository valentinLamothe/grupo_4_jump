const db = require("../database/models");

function adminMiddleware(req, res, next) {
    
    console.log(req.session.userLogged.id_rol_fk)
    if (req.session.userLogged && req.session.userLogged.id_rol_fk === 2) {
        next();
    }else{
        return res.redirect('/')
    }   
}

module.exports = adminMiddleware;