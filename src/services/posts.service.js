const { BlogPost, PostCategory } = require('../models');

const addPost = async (title, content, categoryIds, userId) => {
  const postCategories = await PostCategory.findAll({
    where: { categoryId: categoryIds },
  });
  console.log(postCategories.dataValues);
  if (categoryIds.length !== postCategories.length) {
    throw new Error('one or more "categoryIds" not found', 400);
  } 

  const post = await BlogPost.create({ 
    title,
    content, 
    postCategories,
    userId,
    published: new Date(),
    updated: new Date(),
  });
 
  return post.dataValues;
};

module.exports = { addPost };