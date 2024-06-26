const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middleware/authentication') 
//Importar el middleware de autenticacion
//El isAdmin es para saber que esta logueado y tiene rol de Admin


//En estos 3 casos le damos permiso al usuario que tenga un token y que este autenticado y tiene rol de Admin
//Para crear, actualizar y elimiar un producto
router.post ('/', authentication,isAdmin,ProductController.create) 
router.put ('/id/:id',authentication,isAdmin,ProductController.update)
router.delete ('id/:id',authentication,isAdmin,ProductController.delete)

router.get('/', ProductController.getAll) 
router.get ('/id/:id', ProductController.getById)
router.get ('/name/:name', ProductController.getOneByName)
router.get ('/price/:price', ProductController.getByPrice)
router.get ('/pricedesc', ProductController.getByPriceDesc)
router.post ('/productvali',ProductController.createtwo)


module.exports = router