const { User } = require('../models/index.js')

const bcrypt = require('bcryptjs')

const UserController = {
    create(req, res) {
        req.body.role = 'user'
        const password = bcrypt.hashSync(req.body.password, 10)
        User.create({ ...req.body, password: password })
          .then((user) =>
            res.status(201).send({ message: 'Usuario creado con éxito', user })
          )
          .catch((err) => console.error(err))
      },
      login(req, res) {
        User.findOne({ where: { dni: req.body.dni } }).then((user) => {
          if (!user) {
            return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
          }
          const isMatch = bcrypt.compareSync(req.body.password, user.password)
          if (!isMatch) {
            return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
          }
          res.send(user)
        })
      }
}

module.exports = UserController