## E-Commerce Frontend

This is the frontend of an e-commerce platform built with **React**, **Redux Toolkit**, **TypeScript**, and **Vite**. It connects to the backend to provide a seamless user experience for browsing products, adding items to a cart, managing orders, and handling payments using Stripe.

## Features

- **User Authentication**: Login and register functionality with Firebase or custom authentication.
- **Product Display**: Browse and view detailed information about products.
- **Cart Management**: Add, remove, and update items in the cart.
- **Order Processing**: Place orders and view order history.
- **Payment Integration**: Secure payments handled through Stripe.
- **Data Visualization**: Visualize sales and order data using Chart.js.
- **Real-Time Notifications**: Show toast notifications for real-time feedback on actions like adding items to cart, placing orders, etc.
- **Responsive UI**: Responsive design using **Sass** for a modern, mobile-friendly interface.

## Tech Stack

- TypeScript: Strong typing for better development experience and fewer runtime errors.
- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For managing the application’s state with ease.
- **React Router**: For client-side routing between different pages.
- **Axios**: For making API requests to interact with the backend.
- **Stripe**: For integrating secure payment processing.
- **Chart.js**: For creating dynamic data visualizations.
- **Sass**: CSS preprocessor to write clean, maintainable styles.
- **Firebase**: For authentication or other real-time services (optional).
- **Moment.js**: For easy date manipulation and formatting.

## Setup Instructions

### Prerequisites

- Node.js and npm installed.
- Backend setup and running (e.g., the [eCommerce Backend](#)).
- Stripe account for payment handling .

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-frontend.git
   ```

2. Navigate to the project directory:
     ```bash
    cd ecommerce-frontend
   ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a .env file and add the following variables:
    ```bash
   VITE_FIREBASE_KEY= 
   VITE_AUTH_DOMAIN= 
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET= 
   VITE_MESSAGING_SENDER_ID= 
   VITE_APP_ID= 
   VITE_SERVER= 
   VITE_STRIPE_KEY=
    ```

5. Start the development server:
    ```bash
    npm run dev
     ```   

## API Integration
The frontend communicates with the backend to fetch data, submit forms, and handle user authentication. Key integration points include:

- User Authentication: Communicates with Firebase or a custom backend API.

- Product Data: Fetches product details from the backend via API endpoints.

- Order Management: Sends order details to the backend, where they are processed.

- Payment Integration: Uses the Stripe API to process payments securely.

## Key API Endpoints

- GET /api/products: Fetches the list of available products.

- POST /api/users/register: Registers a new user.

- POST /api/orders: Creates a new order after successful payment.

- GET /api/users/profile: Retrieves the logged-in user's profile.

## Project Structure
```bash

├── public               # Static files like images, fonts, etc.
├── src                  # Source code
│   ├── assets           # Static assets such as images
│   ├── components       # Reusable components (e.g., buttons, modals, forms)
│   ├── pages            # Different pages of the application (e.g., Home, Cart, Product Details)
│   ├── redux            # Redux slices and feature-specific logic
│   ├── styles           # Sass stylesheets
│   ├── types            # Custom hooks
│   ├── utils            # Helper functions and utility logic
│   ├── App.tsx          # Main application component
|   ├── firebase.ts       
│   ├── main.tsx         # Entry point of the application
├── .env                 # Environment variables
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation

```

## Dev Dependencies

- TypeScript: Strong typing for better development experience and fewer runtime errors.

- ESLint: For maintaining code quality and enforcing best practices.

- Vite: Fast development server and build tool with hot module replacement (HMR) and minimal setup time.

- @vitejs/plugin-react-swc: Vite plugin to enhance performance with SWC in React.

### Contributing

Contributions are welcome! If you have suggestions or would like to contribute, feel free to fork this repository, open issues, or submit pull requests.

