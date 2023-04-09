const categoriesService = require('../services/categories.service');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.addCategory(name);
  return res.status(201).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoriesService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = { addCategory, getAllCategories };