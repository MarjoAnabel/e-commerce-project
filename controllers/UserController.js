const { User , Order , Product , Sequelize, Token} = require('../models/index.js')
const { Op } = Sequelize

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']

const UserController = {
    create(req, res) {
        const password = bcrypt.hashSync(req.body.password, 10)
        User.findOne({ where: { name: req.body.name } }).then((user) => {
          if (user) {
            return res.status(400).send({ message: 'Introduzca otro nombre de usuario' })
          }
        })
        User.create({ ...req.body, password: password })
        .then((user) =>
          res.status(201).send({ message: 'Usuario creado con éxito', user })
        )
        .catch((err) => console.error(err))
      },

      login(req, res) {
        console.log('Datos recibidos:', req.body);
        const { name, password } = req.body;
    
        // Verificar si 'name' y 'password' están definidos
        if (!name || !password) {
            return res.status(400).send({ message: 'Nombre de usuario y contraseña son requeridos' });
        }
    
        User.findOne({ where: { name } }).then((user) => {
            if (!user) {
                return res.status(400).send({ message: 'Usuario o contraseña incorrectos' });
            }
    
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch) {
                return res.status(400).send({ message: 'Usuario o contraseña incorrectos' });
            }
    
            // Generar el token JWT
            const token = jwt.sign({ name: user.name }, jwt_secret);
            Token.create({ token, UserId: user.id });
    
            // Enviar el token junto con el mensaje de bienvenida
            res.send({
                message: 'Bienvenid@ ' + user.name,
                token: token // Incluimos el token en la respuesta
            });
        }).catch((error) => {
            console.error('Error en la consulta:', error);
            res.status(500).send({ message: 'Error interno del servidor' });
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

      async getUserLogin(req, res) {
        try {
          const user = req.user;  
      
          res.status(200).json({
            message: 'Usuario loggeado con éxito',
            user, 
          });
        } catch (error) {
          console.error('Error al obtener el usuario loggeado:', error);
          res.status(500).json({ message: 'Error al obtener el usuario loggeado' });
        }
      },

      async logout(req, res) {
        try {

          await Token.destroy({
            where: {
              [Op.and]: [
                { id: req.user.id  }, 
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