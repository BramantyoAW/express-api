'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id: { 
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true,
        allowNull: false
      },
      roleId: {
        type : Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      name: {
        type : Sequelize.STRING,
        allowNull: false
      },
      email: {
        type : Sequelize.STRING,
        allowNull: false
      },
      username: {
        type : Sequelize.STRING,
        allowNull: false
      },
      password: {
        type : Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('users');
  }
};
