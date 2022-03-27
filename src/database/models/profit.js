'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profit.belongsTo(models.User)
    }
  }
  Profit.init({
    Profit: DataTypes.NUMBER,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profit',
  });
  return Profit;
};