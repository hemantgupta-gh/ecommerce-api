# eCommerce API
This project is a scalable backend API for an e-commerce platform built using Node.js, Express.js, and MongoDB.

## Features
- User registration & login (JWT)
- Role-based access (Admin/User)
- Product & category management
- Image upload
- Cart & Order management
- Unit & integration tests

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (Image Upload)
- Jest + Supertest (Testing)

## Setup
- git clone https://github.com/hemantgupta-gh/ecommerce-api.git
- cd ecommerce-api
- npm install
- Create `.env` file with PORT, MONGO_URI, JWT_SECRET
- npm run dev
- Server runs on http://localhost:5000

## Project Structure
ecommerce-api/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── uploads/
├── tests/
├── app.js
├── server.js
└── .env

## Architecture Explanation
This project follows a Layered (MVC) Architecture:

1. Routes Layer
- Handles API endpoints
- Forwards request to controllers

2. Controller Layer
- Business logic
- Handles request & response

3. Model Layer
- Defines MongoDB schema using Mongoose

4. Middleware Layer
- Authentication (JWT)
- Role-based access control
- File upload (Multer)

## Authentication & Authorization
1. JWT-based authentication
2. Role-based access:
- Admin → full access
- User → limited access

## API Integration
- Auth APIs
Register: POST /api/auth/register
Login: POST /api/auth/login

- User APIs
Update User: PUT /api/auth/:id
Delete User: DELETE /api/auth/:id

- Category APIs
Create Category: POST /api/products/category
Update Category: PUT /api/products/category/:id
Delete Category: DELETE /api/products/category/:id

- Product APIs
Create Product (with image): POST /api/products
Get Products: GET /api/products
Update Product: PUT /api/products/:id
Delete Product: DELETE /api/products/:id

- Cart APIs
Add to Cart: POST /api/cart

- Order APIs
Place Order: POST /api/orders

## Database Schema
- User
name: String
email: String
password: String
role: String (admin/user)

- Category
name: String
parent: ObjectId (self-reference)

- Product
name: String
price: Number
category: ObjectId (Category)
image: String (file path)

- Cart
userId: ObjectId
products: [
  productId
  quantity
]

- Order
userId: ObjectId
items: [
  productId
  quantity
]
total: Number
createdAt: Date

## Record in DB
Run the command 'node check-data.js' to check.

## End-to-End Flow
1. User Registration
2. Login, get token
3. Admin creates category
4. Admin creates product
5. User adds product to cart
6. User places order

## Testing
Unit & Integration testing uses Jest for test cases. 

Run tests using command 'npm test', it covers:
- Auth
- Category
- Product
- Cart
- Order
