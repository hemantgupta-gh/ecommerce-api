// checkData.js
require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/User');
const Category = require('./models/Category');
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB\n");

    const users = await User.find();
    const categories = await Category.find();
    const products = await Product.find();
    const carts = await Cart.find();
    const orders = await Order.find();

    console.log("=== Users ===");
    console.log(users);

    console.log("\n=== Categories ===");
    console.log(categories);

    console.log("\n=== Products ===");
    console.log(products);

    console.log("\n=== Carts ===");
    console.log(carts);

    console.log("\n=== Orders ===");
    console.log(orders);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();