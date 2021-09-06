const express = require("express");
const mainController = require("../controllers/mainController");

const router = express.Router();

router.get("/", mainController.index);
router.get("/productCart", mainController.productCart);
router.get('/search', mainController.search);

module.exports = router;
