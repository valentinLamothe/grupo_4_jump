const db = require("../database/models");
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const apiController = {
  users: (req, res) => {
    db.User.findAll().then(function (user) {
      return res.status(200).json({
        count: user.length,
        users: user,
      });
    });
  },

  userId: (req, res) => {
    db.User.findByPk(req.params.id).then(function (user) {
      return res.status(200).json(user);
    });
  },
  products: (req, res) => {
    // pruebas
   /*  db.Product.findAll().then(function (products)

 */

    db.Product.findAll().then(function (products) {
      return res.status(200).json({
        count: products.length,
       /*  /* countByCategory:products.filter(
          category =>
          
          ), // "numerito a colorar",
        /* where: {
        ,
       } */  */

        products: products,
      });
    });
  },
  productId: (req, res) => {
    db.Product.findByPk(req.params.id).then(function (products) {
      return res.status(200).json(products);
    });
  },
};

module.exports = apiController;
