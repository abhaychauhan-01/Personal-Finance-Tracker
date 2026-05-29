# Personal Finance Tracker

A full-stack Personal Finance Tracker application built with the MERN stack that helps users manage income, expenses, budgets, and financial insights through an interactive dashboard.

## Live Demo

Frontend:
https://personal-finance-tracker-theta-red.vercel.app/

Backend:
https://personal-finance-tracker-3mzu.onrender.com/

## Features

* User Authentication (Register/Login)
* JWT-based Authorization
* Add Transactions
* Edit Transactions
* Delete Transactions
* Income and Expense Tracking
* Budget Management
* Financial Insights Dashboard
* Interactive Charts and Analytics
* Dark/Light Mode
* Responsive UI
* MongoDB Data Persistence

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Recharts
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

## Project Structure

bash
Personal-Finance-Tracker
│
├── finance-frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── server
    ├── controllers
    ├── middleware
    ├── models
    ├── routes
    ├── utils
    └── server.js


## Installation

### Clone Repository

bash
git clone https://github.com/abhaychauhan-01/Personal-Finance-Tracker.git
cd Personal-Finance-Tracker


### Frontend Setup

bash
cd finance-frontend
npm install
npm run dev


### Backend Setup

bash
cd server
npm install
npm run dev


## Environment Variables

Create a `.env` file inside the server directory:

env
PORT=5000
MONGO_URI=mongodb+srv://abhaychauhan2906_db_user:RociqRF3Q09MYZYr@cluster2.6fawosx.mongodb.net/?appName=Cluster2
JWT_SECRET=supersecretkey


For frontend:

env
VITE_API_URL=http://localhost:5000


## API Endpoints

### Authentication

http
POST /api/auth/register
POST /api/auth/login


### Transactions
http
GET    /api/transactions
POST   /api/transactions
PUT    /api/transactions/:id
DELETE /api/transactions/:id


### Budget

http
GET  /api/budget
PUT  /api/budget


## Future Improvements

* CSV Export
* PDF Reports
* Email Notifications
* AI-Based Financial Insights
* Monthly Spending Predictions
* Expense Categories Analytics
* Profile Image Upload
* Multi-User Budget Sharing

## Author

Abhay Chauhan

GitHub:
https://github.com/abhaychauhan-01
