const express = require("express");
const apiController = require("../controllers/apicontroller");

const router = express.Router();


router.get("/products", apiController.products);
router.get("/users", apiController.users); 


router.get("/products/:id", apiController.productId);
router.get("/users/:id", apiController.userId);

module.exports = router;
