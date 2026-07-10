# 📈 AI-Based Stock Prediction Portal

An AI-powered **Stock Prediction Portal** built with **React.js**, **Django REST Framework**, and **TensorFlow (LSTM)**. This project demonstrates how Machine Learning can be integrated into a modern full-stack web application to analyze historical stock market data and visualize predictions.

> ⚠️ **Disclaimer:** This project is developed for educational purposes only. It evaluates the model using historical stock data and should **not** be used for real-world investment or trading decisions.

---

# 🚀 Project Overview

The Stock Prediction Portal allows users to:

- Register and log in securely using JWT Authentication.
- Enter a stock ticker symbol (e.g., AAPL, GOOG, TSLA).
- Fetch historical stock market data from Yahoo Finance.
- Generate stock price analysis using an LSTM-based Machine Learning model.
- Visualize multiple graphs, including moving averages and prediction results.

The project combines **Frontend Development**, **Backend API Development**, **Authentication**, and **Machine Learning** into a single full-stack application.

---

# ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication (Access & Refresh Tokens)
- 📊 Historical Stock Data Analysis
- 🤖 LSTM-based Stock Prediction Model
- 📈 Closing Price Visualization
- 📉 100-Day Moving Average Graph
- 📉 200-Day Moving Average Graph
- 📌 Actual vs Predicted Price Graph
- 🌐 RESTful API using Django REST Framework
- ⚡ Responsive UI built with React & Bootstrap
- 🔄 Automatic JWT Token Refresh using Axios Interceptors

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Bootstrap
- Font Awesome

## Backend

- Django
- Django REST Framework
- Simple JWT
- django-cors-headers

## Machine Learning

- TensorFlow
- Keras
- LSTM
- Scikit-Learn
- Pandas
- NumPy

## Data Visualization

- Matplotlib

## Data Source

- Yahoo Finance (yfinance)

## Database

- SQLite (Development)

## Version Control

- Git
- GitHub

---

# 🏗️ Project Architecture

```
                User
                  │
                  ▼
          React Frontend
                  │
             Axios Requests
                  │
                  ▼
      Django REST Framework API
                  │
        JWT Authentication
                  │
                  ▼
           Prediction API
                  │
                  ▼
        Yahoo Finance (yfinance)
                  │
                  ▼
      Data Preprocessing (Pandas)
                  │
                  ▼
          LSTM Neural Network
                  │
                  ▼
        Prediction & Graphs
                  │
                  ▼
         React Dashboard UI
```

---

# 📂 Project Structure

```
stock-prediction-portal/
│
├── backend-drf/
│   ├── accounts/
│   ├── api/
│   ├── media/
│   ├── stock_prediction_main/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend-react/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/stock-prediction-portal.git
```

```bash
cd stock-prediction-portal
```

---

## 2. Backend Setup

```bash
cd backend-drf
```

Create Virtual Environment

```bash
python -m venv env
```

Activate Virtual Environment

### Windows

```bash
env\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Migrations

```bash
python manage.py migrate
```

Start Backend Server

```bash
python manage.py runserver
```

---

## 3. Frontend Setup

```bash
cd frontend-react
```

Install Dependencies

```bash
npm install
```

Run Development Server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

Example:

```
SECRET_KEY=your_secret_key
DEBUG=True
```

For React:

```
VITE_BACKEND_BASE_API=http://127.0.0.1:8000/api/v1
VITE_BACKEND_ROOT=http://127.0.0.1:8000
```

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/register/` | Register User |
| POST | `/api/v1/token/` | Login |
| POST | `/api/v1/token/refresh/` | Refresh Access Token |
| GET | `/api/v1/protected-view/` | Protected Endpoint |
| POST | `/api/v1/predict/` | Generate Stock Prediction |

---

# 🤖 Machine Learning Model

The prediction system is based on a Long Short-Term Memory (LSTM) Neural Network.

### Workflow

1. Download historical stock data using Yahoo Finance.
2. Select Closing Price.
3. Normalize data using MinMaxScaler.
4. Split into 70% Training and 30% Testing.
5. Create 100-day sequences.
6. Train the LSTM model.
7. Predict stock prices.
8. Convert predictions back using inverse transformation.
9. Generate visualization graphs.

---

# 📊 Generated Graphs

The backend automatically generates:

- Stock Closing Price
- 100-Day Moving Average
- 200-Day Moving Average
- Actual vs Predicted Price

These graphs are stored in the `media/` directory and displayed dynamically in the React dashboard.

---

# 🔐 Authentication Flow

- User Registration
- User Login
- JWT Access Token
- JWT Refresh Token
- Protected Routes
- Automatic Token Refresh using Axios Interceptors

---

# 📸 Screenshots

> Screenshots will be added soon.

- Login Page
- Registration Page
- Dashboard
- Prediction Graphs
- Moving Average Charts

---

# 🌐 Live Demo

Frontend:

```
Coming Soon
```

Backend:

```
Coming Soon
```

---

# 🚀 Future Improvements

- PostgreSQL Integration
- Docker Support
- Cloud Deployment
- Technical Indicators (RSI, MACD)
- News Sentiment Analysis
- Real-Time Stock Updates
- Model Performance Optimization
- User Prediction History

---

# 📚 Learning Outcomes

Through this project, I gained hands-on experience with:

- Full Stack Web Development
- React.js
- Django REST Framework
- JWT Authentication
- REST API Development
- Axios Interceptors
- Machine Learning Integration
- TensorFlow & Keras
- LSTM Networks
- Pandas & NumPy
- Data Visualization using Matplotlib
- Git & GitHub

---

# 👨‍💻 Author

**Deepak Yadav**

- GitHub: https://github.com/deepakyadav359
- LinkedIn: *(Add your LinkedIn profile here)*

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is intended for **educational and learning purposes only**.
