'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'CategoryFactories',
      [
        {
          name: 'Пластик',
          isBetaMember: false,
        },
        {
          name: 'Стекло',
          isBetaMember: false,
        },
        {
          name: 'Бумага',
          isBetaMember: false,
        },
        {
          name: 'Металл',
          isBetaMember: false,
        },
        {
          name: 'Органика',
          isBetaMember: false,
        },
        {
          name: 'Электроника',
          isBetaMember: false,
        },
      ],
      {},
    );
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
