const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin} = require('../middleware/authentication') 

router.post ('/', authentication,isAdmin,ProductController.create) 
router.put ('/id/:id',authentication,isAdmin,ProductController.update)
router.delete ('/id/:id',authentication,isAdmin,ProductController.delete)

router.get('/', ProductController.getAll)
router.get ('/productid/id/:id', ProductController.getAllbyid)
router.get ('/id/:id', ProductController.getById)
router.get ('/name/:name', ProductController.getOneByName)
router.get ('/price/:price', ProductController.getByPrice)
router.get ('/pricedesc', ProductController.getByPriceDesc)

module.exports = router