const { BlogPost, Category, PostCategory, User } = require('../models');
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

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  console.log(posts);
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) throw new ErrorApi('Post does not exist', 404);
  return post;
};

const updatePost = async (id, title, content, userId) => {
  const post = await BlogPost.findByPk(id);
  if (post.userId !== userId) throw new ErrorApi('Unauthorized user', 401);
  console.log('entrei');
   await BlogPost.update(
    { title, content, updated: new Date() },
    { where: { id } },
  );
  const postUpdated = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return postUpdated;
};

const deletePost = async (id, userId) => {
  const post = await BlogPost.findByPk(id);
  if (!post) throw new ErrorApi('Post does not exist', 404);
  if (post.userId !== userId) throw new ErrorApi('Unauthorized user', 401);
  await BlogPost.destroy({ where: { id } });
};

module.exports = { addPost, getAllPosts, getPostById, updatePost, deletePost };