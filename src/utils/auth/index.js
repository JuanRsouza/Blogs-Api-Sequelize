const jwt = require('jsonwebtoken');

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, config);
  return token;
};

const validateToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

const decodeToken = (token) => {
  const decoded = jwt.decode(token);
  return decoded;
};

module.exports = { generateToken, validateToken, decodeToken };