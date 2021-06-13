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
    }
}


module.exports = controller