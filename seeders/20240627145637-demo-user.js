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
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Paloma',
        surname: 'Hurtado',
        dni: '23456789P',
        address: 'c. Desengaño 21',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Belen',
        surname: 'Lopez',
        dni: '23456790B',
        address: 'c. Desengaño 21',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Roberto',
        surname: 'Alonso',
        dni: '23456791R',
        address: 'c. Desengaño 21',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Josemi',
        surname: 'Cuesta',
        dni: '23456792J',
        address: 'c. Desengaño 21',
        password: '1234',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nieves',
        surname: 'Cuesta',
        dni: '23456793C',
        address: 'c. Desengaño 21',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mariano',
        surname: 'Delgado',
        dni: '23456794M',
        address: 'c. Desengaño 21',
        password: '1234',
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
