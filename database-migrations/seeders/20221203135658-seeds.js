'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tb_tags', [{
      titulo:"sem tag",
    }], {});
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('tb_tags', null, {});
    
  }
};
