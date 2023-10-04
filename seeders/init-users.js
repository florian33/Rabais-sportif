'use strict';
const moment = require('moment-timezone');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = moment().tz('America/New_York').format();
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
          FirstName: 'Florian',
          LastName: 'Gilles',
          Email: 'admin@rabaissportif.com',
          createdAt: now,
          updatedAt: now,
          roleId:1
      },
      {
        FirstName: 'John',
        LastName: 'Doe',
        Email: 'Nobody@test.com',
        createdAt: now,
        updatedAt: now,
        roleId:2
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
