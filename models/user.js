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
      // define association here
      User.hasMany(models.Order)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Por favor introduce nombre'}
      }
    },
    surname: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Por favor introduce apellid'}
      }
    },
    dni: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Por favor introduce dni'},
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: { msg: 'Por favor introduce dirección'}
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};