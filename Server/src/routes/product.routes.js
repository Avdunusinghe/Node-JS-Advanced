const express = require("express");
const router = express.Router();

const { productImageUpload } = require("../api/products.api");

router.post("/", productImageUpload);

module.exports = router;
