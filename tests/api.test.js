require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

let token;
let productId;
let categoryId;
let userId;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('E-commerce API Flow', () => {

  // Register User
  test('Register Admin', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: "Hemant",
      email: "hemant@test.com",
      password: "123456",
      role: "user"
    });
    expect(res.statusCode).toBe(200);
  });

  // Update user
  test('Update User', async () => {
    const res = await request(app)
      .put(`/api/auth/${userId}`)
      .send({
        name: "Updated Admin",
        password: "newpass123"
      });

    expect(res.statusCode).toBe(200);
  });

  // Delete user
  test('Delete User', async () => {
    const res = await request(app)
      .delete(`/api/auth/${userId}`);

    expect(res.statusCode).toBe(200);
  });

  // Login
  test('Login', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: "hemant@test.com",
      password: "123456"
    });
    token = res.body.token;
    expect(res.statusCode).toBe(200);
  });

  // Create Category
  test('Create Category', async () => {
    const res = await request(app)
      .post('/api/products/category')
      .set('Authorization', token)
      .send({ name: "Electronics" });

    categoryId = res.body._id;
    expect(res.statusCode).toBe(200);
  });

  // Update category
  test('Update Category', async () => {
    const res = await request(app)
      .put(`/api/products/category/${categoryId}`)
      .set('Authorization', token)
      .send({ name: "Updated Category" });

    expect(res.statusCode).toBe(200);
  });

  // Delete category
  test('Delete Category', async () => {
    const res = await request(app)
      .delete(`/api/products/category/${categoryId}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
  });

  // Create Product
  test('Create Product', async () => {
    const res = await request(app)
      .post('/api/products')
      .set('Authorization', token)
      .field('name', 'Test Product')
      .field('price', 100)
      .field('category', categoryId);

    productId = res.body._id;
    expect(res.statusCode).toBe(200);
  });

  // Update Product
  test('Update Product', async () => {
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .set('Authorization', token)
      .field('name', 'Updated Product')
      .field('price', 200);

    expect(res.statusCode).toBe(200);
  });

  // Delete Product
  test('Delete Product', async () => {
    const res = await request(app)
      .delete(`/api/products/${productId}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
  });

  // Get Products
  test('Get Products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
  });

  // Add to Cart
  test('Add to Cart', async () => {
    const res = await request(app)
      .post('/api/cart')
      .set('Authorization', token)
      .send({
        productId,
        quantity: 2
      });

    expect(res.statusCode).toBe(200);
  });

  // Place Order
  test('Place Order', async () => {
    const res = await request(app)
      .post('/api/orders')
      .set('Authorization', token)
      .send({
        total: 200
      });

    expect(res.statusCode).toBe(200);
  });

});