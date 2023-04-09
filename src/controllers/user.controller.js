const userService = require('../services/user.service');

const createUser = async (req, res) => { 
  const { displayName, email, password, image } = req.body;
  const token = await userService.createUser({ displayName, email, password, image });
  return res.status(201).json({ token });
};   
module.exports = { createUser };