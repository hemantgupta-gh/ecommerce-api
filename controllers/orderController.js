const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(400).send("Cart empty");

  const total = req.body.total;
  const order = await Order.create({ userId: req.user.id, items: cart.products, total });

  cart.products = [];
  await cart.save();

  res.json(order);
};