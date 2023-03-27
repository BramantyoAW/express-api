'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        roleId: 1,
        name: 'Admin',
        email: 'admin@express-practice.com',
        username: 'myadmin',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
