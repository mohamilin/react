const express = require('express');
const router = express.Router();

const {getAllProduct, getProductById, postProduct, productUpdate, productDelete} = require('./controller');

// get all
router.get("/product", getAllProduct)

//get by id
router.get("/product/:id", getProductById)

router.post("/product", postProduct)

router.put("/product/:product_id", productUpdate)
router.delete("/product/:product_id", productDelete)

module.exports = router