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
    return queryInterface.bulkInsert('Categories', [
        {
          name: 'Nike',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Adidas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Puma',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'New Balance',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Reebok',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vans Off The Wall',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
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
