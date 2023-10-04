'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserClubs', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // nom de la table pour le modèle User
          key: 'id'
        },
        primaryKey: true
      },
      clubId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clubs', // nom de la table pour le modèle Club
          key: 'id'
        },
        primaryKey: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserClubs');
  }
};