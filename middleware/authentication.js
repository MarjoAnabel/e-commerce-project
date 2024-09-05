const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization; // Obtener el token directamente

    // Verificar si el token está presente
    if (!token) {
      return res.status(401).json({ message: 'No estás autorizado, token no proporcionado' });
    }

    // Verificar el token y extraer el payload
    const payload = jwt.verify(token, jwt_secret);

    // Verificar si el payload contiene el nombre del usuario
    if (!payload.name) {
      return res.status(401).json({ message: 'Token no válido, nombre de usuario no encontrado' });
    }

    // Buscar al usuario por `name` en lugar de `id`
    const user = await User.findOne({ where: { name: payload.name } });
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Verificar si el token coincide con los tokens almacenados
    const tokenFound = await Token.findOne({
      where: { [Op.and]: [{ UserId: user.id }, { token }] },
    });
    if (!tokenFound) {
      return res.status(401).json({ message: 'No estás autorizado, token no válido' });
    }

    // Guardar el usuario en `req.user` y continuar con el siguiente middleware
    req.user = user;
    next();
  } catch (error) {
    console.error('Error al procesar el token:', error);
    res.status(500).json({ error, message: 'Ha habido un problema con el token' });
  }
};



const isAdmin = async (req, res, next) => {
  const admins = ['admin', 'superadmin'];
  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: 'No tienes permisos',
    });
  }
  next();
}

module.exports = { authentication, isAdmin};