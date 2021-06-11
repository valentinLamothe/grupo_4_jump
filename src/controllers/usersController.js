const path = require('path')
const bcryptjs = require('bcrypt');

const User = require(path.join(__dirname, '../../models/User'))


const controller = {
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
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