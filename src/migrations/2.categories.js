"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const CategoryTable = queryInterface.createTable("categories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });

    return CategoryTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("categories"),
};
