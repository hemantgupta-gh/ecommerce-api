const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) {
    cart = await Cart.create({ userId: req.user.id, products: [{ productId, quantity }] });
  } else {
    const index = cart.products.findIndex(p => p.productId == productId);
    if (index > -1) cart.products[index].quantity += quantity;
    else cart.products.push({ productId, quantity });
    await cart.save();
  }
  res.json(cart);
};