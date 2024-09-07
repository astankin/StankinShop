# E-Commerce Web Application

This is a full-stack e-commerce web application built with React (frontend) and Django REST Framework (backend). It provides features like product browsing, shopping cart, user authentication, order management, and payment processing.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication and authorization (registration, login, logout)
- Product listing and detailed view
- Shopping cart functionality
- Order management (placing orders, viewing order history)
- Payment processing (integration with Stripe/PayPal)
- Admin panel for managing products, orders, and users
- Responsive design for mobile and desktop

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces
- **Redux**: State management
- **React Router**: For routing between components
- **Bootstrap**: For responsive and modern UI design
- **Axios**: For making HTTP requests

### Backend

- **Django**: Python web framework for the backend
- **Django REST Framework**: Toolkit for building Web APIs
- **PostgreSQL**: Relational database
- **JWT (JSON Web Tokens)**: For user authentication
- **Stripe/PayPal API**: For payment processing

## Installation

### Prerequisites

- Python (>=3.8)
- Node.js (>=12.x)
- PostgreSQL

### Backend Setup (Django)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
2. Create virtual enviroment
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
4. Install backend dependencies:
   ```bash
   pip install -r requirements.txt
5. Set up the PostgreSQL database and configure the DATABASES setting in settings.py.

6. Run migrations:
   ```bash
   python manage.py migrate
7. Create a superuser:
   ```bash
   python manage.py createsuperuser
9. Start the Django development server:
   ```bash
   python manage.py runserver
   
### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
2. Install frontend dependencies:
   ```bash
   npm install
3. Start the React development server:
   ```bash
   npm start

The frontend should be running on http://localhost:3000.

### Usage
Running the Application
Backend: The Django REST API server runs on http://localhost:8000.
Frontend: The React app runs on http://localhost:3000.
Once both servers are running, you can navigate to http://localhost:3000 in your web browser to start using the application.

### Admin Panel
The admin panel is accessible at http://localhost:8000/admin. You can log in with the superuser credentials you created.

Environment Variables
You can configure environment variables in .env files for both the backend and frontend. This includes API keys, database settings, etc.

### API Endpoints
Here are some of the key API endpoints:

Authentication

POST /api/users/login/: Login user
POST /api/users/register/: Register user
Products

GET /api/products/: Get all products
GET /api/products/:id/: Get product by ID
Orders

POST /api/orders/: Create a new order
GET /api/orders/:id/: Get order by ID
Cart

GET /api/cart/: Get cart items
POST /api/cart/add/: Add item to cart
Payments

POST /api/payment/: Process payment
For a complete list of API endpoints, refer to the backend code or API documentation.

### Screenshots
Screen shots to be added

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository
Create your feature branch: git checkout -b feature/YourFeature
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature/YourFeature
Open a pull request




