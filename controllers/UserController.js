const { User , Order , Product , Sequelize, Token} = require('../models/index.js')
const { Op } = Sequelize

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
        User.findOne({ where: { id: req.body.id } }).then((user) => {
          if (!user) {
            return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
          }
          const isMatch = bcrypt.compareSync(req.body.password, user.password)
          if (!isMatch) {
            return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
          }
          const token = jwt.sign({id:user.id}, jwt_secret)
          Token.create ({token, UserId:user.id})
          res.send({menssage:'Bienvenid@ ' + user.name})
        })
      },

      getAll(req, res) {
        User.findAll()
           .then((users) => res.send(users))
           .catch((err) => {
           console.log(err)
           res.status(500).send({
                message: 'Ha habido un problema al cargar los usuarios',
               })
           })
       },

      getHistoryOf(req,res){
        User.findOne({
          where: {
            name: {
              [Op.like]: `%${req.params.dni}%`,
            },
          },
          include: [
            {
              model: Order,
              include: [Product]
            }
          ]
        })
        .then((user) => {
          if (!user) {
              return res.status(404).send({ message: 'Usuario no encontrado' });
          }
          res.send(user);
        })
      },

      async logout(req, res) {
        try {
          await Token.destroy({
            where: {
              [Op.and]: [
                { id: req.body.id  }, 
                { token: req.headers.authorization },
              ],
            },
          })
          res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
          console.log(error)
          res.status(500).send({ message: 'Hubo un problema al tratar de desconectarte' })
        }
      }
}

module.exports = UserController