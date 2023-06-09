const postsService = require('../services/posts.service');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;
  const userId = id;
  const post = await postsService.addPost(title, content, categoryIds, userId);
  console.log(post);
  return res.status(201).json(post);
};

const getAllPosts = async (_req, res) => {
  const posts = await postsService.getAllPosts();

  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postsService.getPostById(id);

  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;
  const post = await postsService.updatePost(id, title, content, userId);
  console.log(post);

  return res.status(200).json(post);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  await postsService.deletePost(id, userId);

  return res.status(204).end();
};

const searchPosts = async (req, res) => {
  const { q } = req.query;
  const posts = await postsService.searchPosts(q);
  
  return res.status(200).json(posts);
};

module.exports = { addPost, getAllPosts, getPostById, updatePost, deletePost, searchPosts };