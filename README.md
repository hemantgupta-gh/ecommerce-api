# E-commerce API
This project is a scalable backend API for an e-commerce platform built using Node.js, Express.js, and MongoDB.

It supports:
User authentication & authorization
Product and category management
Image uploads
Cart and order processing
Full CRUD operations
Unit & integration testing

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (Image Upload)
- Jest + Supertest (Testing)

## Setup
1. npm install
2. Create `.env` file with PORT, MONGO_URI, JWT_SECRET
3. npm run dev

## Features
- User registration & login (JWT)
- Role-based access (Admin/User)
- Product & category management
- Image upload
- Cart & Order management
- Unit & integration tests

## API Flow
1. Register → Login → Create Category (Admin) → Create Product (Admin) → Get Products → Add to Cart → Place Order