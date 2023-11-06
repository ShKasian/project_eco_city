'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Factories',
      [
        {
          name: 'Завод 1',
          img: 'server/public/img/GB11.png',
          categoryId: 1, 
        },
        {
          name: 'Завод 2',
          img: 'server/public/img/GB11.png',
          categoryId: 1, 
        },
        {
          name: 'Завод 3',
          img: 'server/public/img/GB11.png',
          categoryId: 2, 
        },
        {
          name: 'Завод 4',
          img: 'server/public/img/GB11.png',
          categoryId: 2, 
        },
        {
          name: 'Завод 5',
          img: 'server/public/img/GB11.png',
          categoryId: 3, 
        },
        {
          name: 'Завод 6',
          img: 'server/public/img/GB11.png',
          categoryId: 3, 
        },
        {
          name: 'Завод 7',
          img: 'server/public/img/GB11.png',
          categoryId: 4, 
        },
        {
          name: 'Завод 8',
          img: 'server/public/img/GB11.png',
          categoryId: 4, 
        },
        {
          name: 'Завод 9',
          img: 'server/public/img/GB11.png',
          categoryId: 5, 
        },
        {
          name: 'Завод 10',
          img: 'server/public/img/GB11.png',
          categoryId: 5, 
        },
        {
          name: 'Завод 11',
          img: 'server/public/img/GB11.png',
          categoryId: 6, 
        },
        {
          name: 'Завод 12',
          img: 'server/public/img/GB11.png',
          categoryId: 6, 
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
