const ErrorApi = require('../utils/ErrorApi');

module.exports = (err, _req, res, _next) => {
  if (err instanceof ErrorApi) {
    return res.status(err.status).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: 'Internal server error' });
};