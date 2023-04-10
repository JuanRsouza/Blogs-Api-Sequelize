const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const postsController = require('../controllers/posts.controller');
const validateFildsPost = require('../middlewares/validationPost');

const postsRouter = Router();

postsRouter.post('/', verifyToken, validateFildsPost, postsController.addPost);

module.exports = postsRouter;