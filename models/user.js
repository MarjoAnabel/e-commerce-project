'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.hasMany(models.Order)
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dni: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Por favor introduce dni'},
        is: {
          args: /^[0-9]{8}[A-Z]$/,
          msg: 'Introduce un dni válido'
        },
      }
    },
    address: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


  // email: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   validate: {
  //     notNull: { msg: 'Por favor introduce tu correo'},
  //     isEmail: { msg: 'Por favor introduce un correo valido' },
  //   },
  // }
 
 