'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[
      {
        name: 'John Doe',
        email: 'john@gmmail.com',
        createdAt: '1/1/2022',
        updatedAt: '1/1/2022'
      },
      {
       name: 'Jane Doe',
       email: 'jane@gmmail.com',
       createdAt: '1/1/2022',
       updatedAt: '1/1/2022'
   } 
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
