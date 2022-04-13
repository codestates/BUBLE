'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('users', [
      {
        userName: 'lee',
        favBrand: '나이키',
        email: 'lee@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'kim',
        favBrand: '조던',
        email: 'kim@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'park',
        favBrand: '아디다스',
        email: 'park@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'yoon',
        favBrand: '르꼬끄',
        email: 'yoon@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'kwon',
        favBrand: '데상트',
        email: 'kwon@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'choi',
        favBrand: '마르지엘라',
        email: 'choi@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'jung',
        favBrand: '컨버스',
        email: 'jung@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'tsoi',
        favBrand: '반스',
        email: 'tsoi@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'li',
        favBrand: '닥터마틴',
        email: 'li@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'shin',
        favBrand: '디스커버리',
        email: 'shin@gamil.com',
        phoneNumber: '01012345678',
        password: '1234',
        createAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
