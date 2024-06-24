const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController')
// const OrderProductController = require('../controllers/OrderProductController')

router.post ('/', OrderController.create)
router.get ('/', OrderController.getAll)


module.exports = router