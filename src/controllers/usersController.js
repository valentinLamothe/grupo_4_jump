const path = require('path')
const bcryptjs = require('bcrypt');
const { validationResult } = require('express-validator');

const User = require(path.join(__dirname, '../../models/User'));




const controller = {
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
         
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename
        }

        User.create(userToCreate);
        return res.redirect('/user/login')
    },
    login:(req, res) => {
        res.render('login')
    },


    profile:(req, res) => {
        res.render('profile')

    },

    loginProcess:(req, res) => {
        /* ************** prueba Valen ***************
        let userLogin = User.findByField('email', req.body.email)
        if (userLogin) {
            //usuario real --> corroborar clave
            let passwordValidator = bcryptjs.compareSync(req.body.password,userLogin.password); //te da la clave real que puso uno
            if(passwordValidator){
                req.session.userLogged=userLogin;
                res.redirect('/user/profile');

            }//else{res.send("ahora le pifiaste a la clave kpo")}
            //clave real --> accion
            

        }//else{res.send("le pifiaste kpo")}
        **************** fin prueba Valen ******************* */
       /*  ***prueba Juli **
       
       let errors = validationResult(req);
        if(errors.isEmpty()){
            }
        else{return res.render('profile',{errors:errors.errors});
        }
    
    },
    store:(req,res) =>{
       let errors = validationResult(req);
        if(errors.isEmpty()){
            let usersJSON
        }

    }
 ***fin de prueba juli *** */
            
        
            
    }
    
}


module.exports = controller