'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Categories.belongsTo(models.Profit)
     Categories.belongsTo(models.Expenses)
    }
  }
  Categories.init({
    categoryexpenses: DataTypes.STRING,
    categoryprofit: DataTypes.STRING,
    profitId: DataTypes.INTEGER,
    expensesId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'categories',
  });
  return Categories;
};