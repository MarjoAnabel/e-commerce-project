const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')


router.post ('/password/:password', UserController.create)
router.post ('/dni/password/:dni/:password', UserController.login)

module.exports = router