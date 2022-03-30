'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryexpenses: {
        type: Sequelize.STRING
      },
      categoryprofit: {
        type: Sequelize.STRING
      },
      profitId :{
        type : Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model : 'profits',
          key : 'id'
        }
      },
      expensesId :{
        type : Sequelize.INTEGER,
        onDelete : 'CASCADE',
        references : {
          model : 'Expenses',
          key : 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categories');
  }
};