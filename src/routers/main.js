const express = require("express");
const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);
router.get("/productCart", mainController.productCart);

module.exports = router;
