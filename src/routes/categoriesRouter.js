const { Router } = require('express');
const verifyToken = require('../middlewares/verifyToken');
const categoriesController = require('../controllers/categories.controller');

const categoriesRouter = Router();

categoriesRouter.post('/', verifyToken, categoriesController.addCategory);
categoriesRouter.get('/', verifyToken, categoriesController.getAllCategories);

module.exports = categoriesRouter;