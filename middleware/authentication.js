const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];

const authentication = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).send({ message: 'Acceso denegado. No token provided.' })
  }

  try {
    const decoded = jwt.verify(token, jwt_secret)
    const user = await User.findByPk(decoded.id, {
      include: [{ model: Token, where: { token: token } }]
    })

    if (!user) {
      return res.status(401).send({ message: 'Usuario no encontrado.' })
    }

    req.user = user
    next()
  } catch (err) {
    console.error(err)
    res.status(400).send({ message: 'Token inválido.' })
  }
}

const isAdmin = async (req, res, next) => {
  const admins = ['admin', 'superadmin'];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: 'No tienes permisos',
    });
  }
  next();
}

module.exports = { authentication, isAdmin };






