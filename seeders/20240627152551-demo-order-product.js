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
        quantity: '1',
        OrderId: '1',
        ProductId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '2',
        OrderId: '1',
        ProductId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '1',
        OrderId: '2',
        ProductId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '2',
        OrderId: '3',
        ProductId: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '1',
        OrderId: '3',
        ProductId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '3',
        OrderId: '3',
        ProductId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '1',
        OrderId: '4',
        ProductId: '7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '1',
        OrderId: '4',
        ProductId: '8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity: '2',
        OrderId: '5',
        ProductId: '5',
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
