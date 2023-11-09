'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Factories',
      [
        {
          name: '"ПластикоРесурс"',
          description: 'Завод по переработке пластика',
          img: '/GB11.jpg',
          coordX: 55.666146, 
          coordY: 37.583008,
          categoryId: 1, 
        },
        {
          name: '"ПластикоТрансформ"',
          description: 'Завод по переработке пластика',
          img: '/GB12.jpg',
          coordX: 55.662219, 
          coordY: 37.591348,
          categoryId: 1, 
        },
        {
          name: '"Стекло-Преобразование"',
          description: 'Завод по переработке стекла',

          img: '/GB13.jpg',
          coordX: 55.704732,  
          coordY: 37.710341,
          categoryId: 2, 
        },
        {
          name: '"Стекло-ЭкоЛиния"',
          description: 'Завод по переработке стекла',
          img: '/GB14.jpg',
          coordX: 55.778371,  
          coordY: 37.659623,
          categoryId: 2, 
        },
        {
          name: '"Бумажный Вторичный Цикл"',
          description: 'Завод по переработке бумаги',
          img: '/GB15.jpg',
          coordX: 55.739867, 
          coordY: 37.509346 ,
          categoryId: 3, 
        },
        {
          name: '"Бумажная ЭкоФабрика"',
          description: 'Завод по переработке бумаги',
          img: '/GB16.jpg',
          coordX: 55.777723, 
          coordY: 37.458160,
          categoryId: 3, 
        },
        {
          name: '"МеталлоМастер"',
          description: 'Завод по переработке металла',
          img: '/GB17.jpg',
          coordX: 55.763120, 
          coordY: 37.543571,
          categoryId: 4, 
        },
        {
          name: '"МеталлоОчистка"',
          description: 'Завод по переработке металла',
          img: '/GB11.jpg',
          coordX: 55.807996, 
          coordY: 37.603582,
          categoryId: 4, 
        },
        {
          name: '"Органика-Возобновление"',
          description: 'Завод по переработке органики',
          img: '/GB12.jpg',
          coordX: 55.802330, 
          coordY: 37.648661,
          categoryId: 5, 
        },
        {
          name: '"Органический ОтходОсвоение"',
          description: 'Завод по переработке органики',
          img: '/GB13.jpg',
          coordX: 55.770328,
          coordY: 37.630258,
          categoryId: 5, 
        },
        {
          name: '"ЭлектроПереработка"',
          description: 'Завод по переработке электроники',
          img: '/GB15.jpg',
          coordX: 55.688583, 
          coordY: 37.610173,
          categoryId: 6, 
        },
        {
          name: '"ЭлектроКруг"',
          description: 'Завод по переработке электроники',
          img: '/GB16.jpg',
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
