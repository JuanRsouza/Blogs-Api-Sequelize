const ErrorApi = require('../utils/ErrorApi');
const { User } = require('../models');
const { generateToken } = require('../utils/auth');

// const validateEmail = (email) => {  
//   const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
//   return regex.test(email);
// };

const login = async (email, password) => {
 const user = await User.findOne({ where: { email, password } });

 if (!user) throw new ErrorApi('Invalid fields', 400);

 const token = generateToken(user.id);
 return token;
};

module.exports = { login };