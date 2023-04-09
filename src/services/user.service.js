const ErrorApi = require('../utils/ErrorApi');
const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const createUser = async ({ displayName, email, password, image }) => {
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) throw new ErrorApi('User already registered', 409);
  const user = await User.create({ displayName, email, password, image });
  const token = generateToken(user.id);
  return token;
};

module.exports = { createUser };