const express = require("express");
const apiController = require("../controllers/apicontroller");

const router = express.Router();

router.get("/users", apiController.users); //debe dar el count y el array de user
router.get("/users/:id", apiController.userId);

router.get("/products", apiController.products);
router.get("/products/:id", apiController.productId);

module.exports = router;
