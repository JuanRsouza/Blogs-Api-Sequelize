const { Router } = require('express');
const validationFields = require('../middlewares/validationFields');
const userController = require('../controllers/user.controller');

const userRouter = Router();

userRouter.post('/', validationFields, userController.createUser);

module.exports = userRouter;