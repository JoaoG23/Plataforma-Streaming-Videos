"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([

        queryInterface.createTable("tb_usuarios", {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            usuario: {
              type: Sequelize.DataTypes.STRING(70),
              allowNull: false,
              unique: true
            },
            email: {
              type: Sequelize.DataTypes.STRING(70),
              allowNull: false,
              unique: true
            },
            senha: {
              type: Sequelize.DataTypes.TEXT,
              allowNull: false
            },
            is_admin:{
              type: Sequelize.DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue:false
            },
            createdAt:{
              type:Sequelize.DataTypes.DATE
            },
            updatedAt:{
              type:Sequelize.DataTypes.DATE
            }
        }),

        queryInterface.createTable("tb_videos", {
            id: {
              type: Sequelize.DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },
            titulo:{
              type:Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            sobre:{
              type:Sequelize.DataTypes.STRING,
              allowNull: false,
            },
            url:{
              type:Sequelize.DataTypes.TEXT,
              allowNull: false,
            },
            ano:{
              type:Sequelize.DataTypes.INTEGER,
              allowNull: false,
            },
            tag_id: {
              type: Sequelize.DataTypes.INTEGER,
              references: {
                model: "tb_tags",
                key: "id",
              },
            },
            autor:{
              type:Sequelize.DataTypes.STRING,
              allowNull: true,
            },
        }),
        
        queryInterface.createTable("tb_tags", {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          titulo: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          }
        }),

        
        queryInterface.createTable("tb_favoritos", {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
          },
          id_usuario: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: "tb_usuarios",
              key: "id",
            },
          },
          id_video: {
            type: Sequelize.DataTypes.INTEGER,
            references: {
              model: "tb_videos",
              key: "id",
            },
          }
        }),
        
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(() => {
      return Promise.all([
        queryInterface.dropTable("tb_usuarios", { force: true }),
        queryInterface.dropTable("tb_videos", { force: true }),
        queryInterface.dropTable("tb_tags", { force: true }),
        queryInterface.dropTable("tb_favoritos", { force: true }),
      ]);
    });
  },
};
