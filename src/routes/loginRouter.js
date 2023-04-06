const { Router } = require('express');
const validationUser = require('../middlewares/validationUser');
const loginController = require('../controllers/login.controller');

const loginRouter = Router();

loginRouter.post('/', validationUser, loginController.login);

module.exports = loginRouter;