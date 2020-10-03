const express = require('express');
const router = express.Router();

const {getAllProduct} = require('./controller');

router.get("/", getAllProduct)

module.exports = router