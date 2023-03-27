'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', { 
      id: { 
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
      },
      roleCode: {
        type : Sequelize.STRING,
        allowNull: false,
      },
      roleName: {
        type : Sequelize.STRING,
        allowNull: false,
      },
      desc: {
        type : Sequelize.STRING,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles');
  }
};
