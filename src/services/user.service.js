const ErrorApi = require('../utils/ErrorApi');
const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const createUser = async ({ displayName, email, password, image }) => {
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) throw new ErrorApi('User already registered', 409);
  const user = await User.create({ displayName, email, password, image });
  const token = generateToken(user.dataValues.id);
  return token;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) throw new ErrorApi('User does not exist', 404);
  return user;
};

module.exports = { createUser, getAllUsers, getUserById };