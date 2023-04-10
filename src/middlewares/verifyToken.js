const { validateToken } = require('../utils/auth/index');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) res.status(401).json({ message: 'Token not found' });
    const user = validateToken(authorization);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};