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

module.exports = { addPost, getAllPosts };