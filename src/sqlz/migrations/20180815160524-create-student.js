'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.STRING
      },
      TSIComplete: {
        type: Sequelize.STRING
      },
      FAFSA: {
        type: Sequelize.STRING
      },
      TAFSA: {
        type: Sequelize.STRING
      },
      COLLEGE: {
        type: Sequelize.STRING
      },
      Highschool: {
        type: Sequelize.STRING
      },
      Major: {
        type: Sequelize.STRING
      },
      ANum: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};