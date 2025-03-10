# 🔐 Authentication API

A secure and scalable authentication API built with Node.js, Express, and MongoDB.

## 🚀 Features

- User authentication (signup, login, logout)
- JWT-based authorization
- Email verification via Mailtrap/Brevo
- Environment variable-based configuration for security
- Supports multiple environments (development & production)

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT, bcrypt
- **Email Service:** Mailtrap, Brevo

## 📂 Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URI=mongodb+srv://demoUser:demoPassword@cluster0.example.mongodb.net/auth_db
PORT=5000
JWT_SECRET=demo_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=demo_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL=http://localhost:5173

SMTP_USER="demo_smtp_user"
SMTP_PASS="demo_smtp_password"
SENDER_EMAIL="demo_email@example.com"
```

## 📦 Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/demo-user/auth-api.git
cd auth-api
npm install
```

## ▶️ Running the Server

Start the development server:

```sh
npm start
```

For development mode with hot-reloading:

```sh
npm run dev
```

## 📌 API Endpoints

| Method | Endpoint         | Description            |
|--------|----------------|------------------------|
| POST   | `/api/auth/register` | Register a new user  |
| POST   | `/api/auth/login` | Login user           |
| GET    | `/api/auth/logout` | Logout user          |
| GET    | `/api/auth/me` | Get current user info |

## 🛡️ Security Best Practices

- **Do not expose sensitive credentials in public repositories.**
- Use `.env` files and add them to `.gitignore`.
- Consider using **environment variable management tools** like [Doppler](https://www.doppler.com/) or **AWS Secrets Manager**.

## 📜 License

This project is licensed under the MIT License.

---

Made with ❤️ by Aviral Singh(https://github.com/Aviral3501)

