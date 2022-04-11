'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buyCarts', [
      {
        userId: 9,
        itemId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        itemId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 9,
        itemId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        itemId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        itemId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buyCarts', null, {});
  },
};
