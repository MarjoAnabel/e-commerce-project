const express = require('express')
const router = express.Router()
const OrderProductController = require('../controllers/OrderProductController')


router.get('/', OrderProductController.getAll)


module.exports = router