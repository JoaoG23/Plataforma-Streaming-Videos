"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.createTable("tb_usuarios", {
            id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            usuario: {
              type: DataTypes.STRING(70),
              allowNull: false,
              unique: true
            },
            email: {
              type: DataTypes.STRING(70),
              allowNull: false,
              unique: true
            },
            senha: {
              type: DataTypes.TEXT,
              allowNull: false
            }
        }),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.dropTable("tb_usuarios", { force: true }),
      ]);
    });
  },
};
