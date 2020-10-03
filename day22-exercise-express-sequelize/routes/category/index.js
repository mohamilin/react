const express = require('express');
const router = express.Router();

const {getAllCategory, getCategoryById, postCategory, categoryUpdate, categoryDelete} = require('./controller');

// get all
router.get("/category", getAllCategory)

//get by id
router.get("/category/:id", getCategoryById)

router.post("/category", postCategory)

router.put("/category/:category_id", categoryUpdate)
router.delete("/category/:category_id", categoryDelete)

module.exports = router