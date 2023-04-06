"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategoryTable = queryInterface.createTable("posts_categories", {
        post_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'blog_posts',
              key: 'id',
            },
            onDelete: 'CASCADE',
          },
        category_id: {
            type: Sequelize.INTEGER,
            references: {
              model: 'categories',
              key: 'id',
            },
            onDelete: 'CASCADE',
          },
    });

    return PostCategoryTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("posts_categories"),
};
