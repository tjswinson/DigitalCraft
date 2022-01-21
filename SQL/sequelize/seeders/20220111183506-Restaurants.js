'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Restaurants',[
      {
        id:'11',
        name: 'Twisted Taco',
        address: '123 Main St',
        category: 'Mexican',
        createdAt: new Date(),
        updatedAt: new Date()
          },
      {
        id:'12',
        name: 'Tropical Cuisine',
        address: '55 Broad St',
        category: 'Caribbean',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },

      {
        id:'13',
      name: 'Pasta Blitz',
      address: '75 State St',
      category: 'Italian',
      createdAt: new Date(),
        updatedAt: new Date()
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
