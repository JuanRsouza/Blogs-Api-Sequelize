const userService = require('../services/user.service');

const createUser = async (req, res) => { 
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });
  return res.status(201).json({ token });
};   

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  return res.status(200).json(user);
};

module.exports = { createUser, getAllUsers, getUserById };