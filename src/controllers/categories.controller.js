const categoriesService = require('../services/categories.service');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.addCategory(name);
  return res.status(201).json(category);
};

module.exports = { addCategory };