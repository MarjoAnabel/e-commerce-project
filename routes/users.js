const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')


router.post ('/', UserController.create)
router.post ('/dni/password/:dni/:password', UserController.login)
router.get ('/dni/:dni', UserController.getHistoryOf)

module.exports = router