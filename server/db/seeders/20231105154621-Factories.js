'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Factories',
      [
        {
          name: 'Завод по переработке пластика',
          img: 'https://rostec.ru/upload/iblock/df2/df272fb969a354c41801cd0c28990a5c.jpg',
          coordX: 55.666146, 
          coordY: 37.583008,
          categoryId: 1, 
        },
        {
          name: 'Завод по переработке пластика',
          img: '/img/GB12.jpg',
          coordX: 55.662219, 
          coordY: 37.591348,
          categoryId: 1, 
        },
        {
          name: 'Завод по переработке стекла',
          img: '/img/GB13.jpg',
          coordX: 55.704732,  
          coordY: 37.710341,
          categoryId: 2, 
        },
        {
          name: 'Завод по переработке стекла',
          img: '/img/GB14.jpg',
          coordX: 55.778371,  
          coordY: 37.659623,
          categoryId: 2, 
        },
        {
          name: 'Завод по переработке бумаги',
          img: '/img/GB15.jpg',
          coordX: 55.739867, 
          coordY: 37.509346 ,
          categoryId: 3, 
        },
        {
          name: 'Завод по переработке бумаги',
          img: '/img/GB16.jpg',
          coordX: 55.777723, 
          coordY: 37.458160,
          categoryId: 3, 
        },
        {
          name: 'Завод по переработке металла',
          img: '/img/GB17.jpg',
          coordX: 55.763120, 
          coordY: 37.543571,
          categoryId: 4, 
        },
        {
          name: 'Завод по переработке металла',
          img: 'server/public/img/GB11.png',
          coordX: 55.807996, 
          coordY: 37.603582,
          categoryId: 4, 
        },
        {
          name: 'Завод по переработке органики',
          img: 'server/public/img/GB11.png',
          coordX: 55.802330, 
          coordY: 37.648661,
          categoryId: 5, 
        },
        {
          name: 'Завод по переработке органики',
          img: 'server/public/img/GB11.png',
          coordX: 55.770328,
          coordY: 37.630258,
          categoryId: 5, 
        },
        {
          name: 'Завод по переработке электроники',
          img: 'server/public/img/GB11.png',
          coordX: 55.688583, 
          coordY: 37.610173,
          categoryId: 6, 
        },
        {
          name: 'Завод по переработке электроники',
          img: 'server/public/img/GB11.png',
          coordX: 55.694683, 
          coordY: 37.464738,
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
