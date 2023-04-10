const { BlogPost, Category, PostCategory } = require('../models');
const ErrorApi = require('../utils/ErrorApi');

const addPost = async (title, content, categoryIds, userId) => {
  const mapCategories = categoryIds.map((categoryId) => Category.findByPk(categoryId));
  const promiseCategory = await Promise.all(mapCategories);
  const categoryNotFound = promiseCategory.some((category) => category === null);
  if (categoryNotFound) throw new ErrorApi('one or more "categoryIds" not found', 400);
  const post = await BlogPost.create({ 
    title,
    content, 
    mapCategories,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  await PostCategory.bulkCreate(
    categoryIds.map((categoryId) => ({ categoryId, postId: post.id })),
  );
  return post.dataValues;
};

module.exports = { addPost };