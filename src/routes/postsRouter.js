const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const postsController = require('../controllers/posts.controller');
const validateFildsPost = require('../middlewares/validationPost');
const validationInputsPosts = require('../middlewares/validationUpdatePost');

const postsRouter = Router();

postsRouter.post('/', verifyToken, validateFildsPost, postsController.addPost);
postsRouter.get('/', verifyToken, postsController.getAllPosts);
postsRouter.get('/:id', verifyToken, postsController.getPostById);
postsRouter.put('/:id', verifyToken, validationInputsPosts, postsController.updatePost);

module.exports = postsRouter;