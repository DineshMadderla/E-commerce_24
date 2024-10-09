## E-Commerce Backend

This is the backend of an e-commerce platform built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**. The backend handles user authentication, product management, cart functionality, payment processing, and more.

## Features

- **User Authentication**: Secure login, registration, and role-based authorization.
- **Product Management**: CRUD operations for products.
- **Order Management**: Create, view, and update orders.
- **Payment Integration**: Using Stripe API for secure payments.
- **Image Handling**: File uploads with Multer.
- **Data Validation**: Using Validator for sanitizing input data.
- **Caching**: Node-cache for temporary storage of frequently accessed data.
- **Logging**: Request logging using Morgan for monitoring API traffic.

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for managing products, orders, and users.
- **TypeScript**: Type-safe JavaScript for improved development experience.
- **Stripe**: For handling payments.
- **Multer**: For handling file uploads (e.g., product images).
- **UUID**: For generating unique identifiers.
- **Morgan**: For logging HTTP requests.
- **Node-Cache**: Simple in-memory caching solution.

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- MongoDB installed locally or a MongoDB Atlas instance.
- Stripe account for handling payments.
- TypeScript installed globally (optional if using npm scripts).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-backend.git
   ```
2. Navigate to the project directory:
     ```bash
    cd ecommerce-backend
   ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a .env file and add the following variables:
    ```bash
    PORT=5000
    MONGO_URI=your_mongo_uri
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```
5. Compile the TypeScript code:
    ```bash
    npm run build
    ```
6. Start the development server:
    ```bash
    npm run dev
     ```

## API Endpoints

#### User Routes

- POST /api/users/register: Register a new user.
- POST /api/users/login: Log in a user.
- GET /api/users/profile: Get the profile of the logged-in user.

### Product Routes

- GET /api/products: Get all products.
- POST /api/products: Add a new product (Admin only).
- PUT /api/products/: Update product (Admin only).
- DELETE /api/products/: Delete product (Admin only).

### Cart Routes

- POST /api/cart: Add an item to the user's cart.
- GET /api/cart: Get the current user's cart.

### Order Routes

- POST /api/orders: Create a new order
- GET /api/orders: Get all orders of the logged-in user.

## Project Structure
```bash

├── dist              # Compiled JavaScript files
├── src               # TypeScript source files
│   ├── controllers   # Route handler functions
│   ├── middlewares   # Enabling tasks like authentication
│   ├── models        # Mongoose models
│   ├── routes        # API routes
│   ├── types         # Types are used to ensure type safety, enhance code clarity
│   ├── utils         # Utility functions (validation, caching, etc.)
│   └── app.ts        # Entry point of the application
|── uploads           # admin uploaded product images will be stored here 
├── .env              # Environment variables
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```
## Dev Dependencies

- @faker-js/faker: For generating fake data during development/testing.
- @types: TypeScript types for various dependencies.
- nodemon: Automatically restarts the server on file changes.
- typescript: TypeScript compiler.

### Contributing

- Feel free to fork this repository, open issues, or submit pull requests to improve this project.




       
