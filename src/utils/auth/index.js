const jwt = require('jsonwebtoken');

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, config);
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

module.exports = { generateToken, verifyToken };