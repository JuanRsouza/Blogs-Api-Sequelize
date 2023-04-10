const postsService = require('../services/posts.service');
const { decodeToken } = require('../utils/auth');

const addPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const userId = decodeToken(token).id;
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
  const token = req.headers.authorization;
  const userId = decodeToken(token).id;
  const post = await postsService.updatePost(id, title, content, userId);
  console.log(post);

  return res.status(200).json(post);
};

module.exports = { addPost, getAllPosts, getPostById, updatePost };