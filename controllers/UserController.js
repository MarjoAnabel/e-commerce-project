const { User, Token } = require('../models/index.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']

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
          const token = jwt.sing({dni: dni}, jwt_secret)
          Token.create ({token, dni:user.dni})
          res.send({menssage:'Bienvenid@' + user.name})
        })
      },

      async logout(req, res) {
        try {
          await Token.destroy({
            where: {
              [Op.and]: [
                { dni: req.body.dni  }, 
                { token: req.headers.authorization },
              ],
            },
          })
          res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
          console.log(error)
          res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        }
      }



      // ,
      
      // Endpoint que nos traiga la información del usuario conectado junto a los pedidos que 
      // tiene y los productos que contiene cada pedido

      // getHistoryOf(req,res){

      // }
}

module.exports = UserController