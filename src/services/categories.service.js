const ErrorApi = require('../utils/ErrorApi');
const { Category } = require('../models');

const addCategory = async (name) => {
  if (!name) throw new ErrorApi('"name" is required', 400);
  const category = await Category.create({ name });
  return category;
};
module.exports = { addCategory };