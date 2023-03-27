'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        roleCode: 'ADM',
        roleName: 'Admin',
        desc: 'Roles Admin posbile for handling all endpoint',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleCode: 'CLI',
        roleName: 'client',
        desc: 'Client posbile for handling management list and action',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
