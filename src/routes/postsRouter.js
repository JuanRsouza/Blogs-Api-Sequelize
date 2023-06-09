const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const postsController = require('../controllers/posts.controller');
const validateFildsPost = require('../middlewares/validationPost');
const validationInputsPosts = require('../middlewares/validationUpdatePost');

const postsRouter = Router();

postsRouter.post('/', verifyToken, validateFildsPost, postsController.addPost);
postsRouter.get('/', verifyToken, postsController.getAllPosts);
postsRouter.get('/search', verifyToken, postsController.searchPosts);
postsRouter.get('/:id', verifyToken, postsController.getPostById);
postsRouter.put('/:id', verifyToken, validationInputsPosts, postsController.updatePost);
postsRouter.delete('/:id', verifyToken, postsController.deletePost);

module.exports = postsRouter;