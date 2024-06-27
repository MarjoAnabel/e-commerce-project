const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const { authentication, isAdmin } = require('../middleware/authentication')


router.post ('/', UserController.create)
router.post ('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout) 
//Para destruir el token cuando cierren sesion 
// router.post ('/', UserController.getHistoryOf)

module.exports = router