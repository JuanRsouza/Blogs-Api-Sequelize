const { Router } = require('express');
const validationFields = require('../middlewares/validationFields');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

const userRouter = Router();

userRouter.post('/', validationFields, userController.createUser);
userRouter.get('/', verifyToken, userController.getAllUsers);

module.exports = userRouter;