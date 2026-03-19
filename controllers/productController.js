const Product = require('../models/Product');
const Category = require('../models/Category');

// Create category
exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
};

// Update category
exports.updateCategory = async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(category);
};

// Delete category
exports.deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json({ message: "Category deleted successfully" });
};

// Create product
exports.createProduct = async (req, res) => {
  const product = await Product.create({
    ...req.body,
    image: req.file ? req.file.path : null
  });
  res.json(product);
};

// Update product
exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      ...(req.file && { image: req.file.path })
    },
    { new: true }
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json({
    message: "Product deleted successfully"
  });
};

// Get all products
exports.getProducts = async (req, res) => {
  const products = await Product.find().populate('category');
  res.json(products);
};