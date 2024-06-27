'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Orders', [
      {
        date: '2020-05-20',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2020-05-21',
        UserId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2020-05-21',
        UserId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2020-05-22',
        UserId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: '2020-05-23',
        UserId: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
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
  }
};
