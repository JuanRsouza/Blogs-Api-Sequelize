const { verifyToken } = require('../utils/auth/index');

module.exports = (req, _res, next) => { 
  const { authorization } = req.headers;
  verifyToken(authorization);
  next();
};