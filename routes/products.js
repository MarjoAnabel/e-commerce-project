const express = require('express')
const router = express.Router()
const CategoryController = require("../controllers/ProductController")
const ProductController = require('../controllers/ProductController')




router.post ('/',ProductController.create)



module.exports = router