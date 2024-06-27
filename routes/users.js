const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const { authentication, isAdmin } = require('../middleware/authentication')


router.post ('/', UserController.create)
router.post ('/dni/password/:dni/:password', UserController.login)
router.get ('/dni/:dni', UserController.getHistoryOf)
router.post ('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout) 

module.exports = router