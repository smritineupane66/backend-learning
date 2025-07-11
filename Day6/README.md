
# 🔐 Express.js Middleware & Routing Project

A simple Node.js and Express.js backend app designed to help you learn and practice key backend concepts like routing, custom middleware, authentication via headers, and error handling. This project demonstrates how middleware can be used to log requests, protect routes, and handle errors gracefully.

---

## 🚀 Features

* Set up an Express.js server with basic routing
* Use built-in middleware to parse JSON request bodies
* Create custom middleware for logging request details
* Implement authentication middleware that validates headers (token and username)
* Protect specific routes using middleware (e.g., `/profile`)
* Global error handling middleware for catching and responding to errors
* Test APIs easily using tools like Postman

---

## 📦 Tech Stack

* **Node.js**: JavaScript runtime environment
* **Express.js**: Web framework for building backend APIs
* **Postman** (recommended): For testing API endpoints and headers

---

## 🛠️ Setup Instructions

To get this project running on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/backend-learning.git
cd backend-learning/Day5
```

### 2. Install Dependencies

```bash
npm install express
```

### 3. Run the Server

```bash
node index.js
```

The server will start running locally on port 3000.

### 4. Access the APIs

Open your browser or API client (Postman) and visit:

```
http://localhost:3000/
```

Try protected routes like `/profile` with required headers:

| Header   | Value  |
| -------- | ------ |
| token    | 123    |
| username | smriti |

---

Feel free to explore and extend the middleware functions to learn more about Express.js!

---


