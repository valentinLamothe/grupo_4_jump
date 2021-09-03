const db = require("../database/models");

function adminMiddleware(req, res, next) {
    
    res.locals.id_rol_fk = false;
    if (req.session.userLogged) {
	    
            if(req.session.userLogged.id_rol_fk === 2   ){
                
                res.locals.id_rol_fk = true;
                
            }
        

        
       
        
    
}
	next();
}

module.exports = adminMiddleware;