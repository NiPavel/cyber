'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Centers', [
      { placeName: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Los Angeles', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Chicago', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Houston', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Phoenix', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Philadelphia', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'San Antonio', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'San Diego', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Dallas', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'San Jose', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Austin', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Jacksonville', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Fort Worth', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Columbus', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Charlotte', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'San Francisco', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Indianapolis', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Seattle', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Denver', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Washington', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Boston', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'El Paso', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Detroit', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Nashville', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Portland', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Memphis', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Oklahoma City', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Las Vegas', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Louisville', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Baltimore', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Milwaukee', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Albuquerque', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Tucson', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Fresno', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Mesa', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Sacramento', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Atlanta', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Kansas City', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Colorado Springs', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Miami', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Raleigh', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Omaha', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Long Beach', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Virginia Beach', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Oakland', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Minneapolis', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Tulsa', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Arlington', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'New Orleans', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Wichita', createdAt: new Date(), updatedAt: new Date() },
      { placeName: 'Cleveland', createdAt: new Date(), updatedAt: new Date() },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Centers', null, {});
  }
};
