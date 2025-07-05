# 💬 SocketChat

A **real-time full-stack chat application** with secure login, JWT-based authentication, and true **duplex communication** using **Socket.IO**. Built using **React**, **Node.js**, **Express**, **MongoDB Atlas**, and **Redux Toolkit with Thunks**.

---

## 🚀 Live Demo

🌐 [Click to open the live app](https://socketchat-lnrb.onrender.com/)

---

## ⚙️ Tech Stack

### 🔧 Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** – Cloud-hosted NoSQL DB
- **JWT** – Authentication with access token
- **bcrypt** – Password hashing
- **Socket.IO** – Real-time duplex messaging

### 🎨 Frontend
- **React.js**
- **Redux Toolkit** + **Redux Thunk** – State + async API calls
- **Axios Instance** – API abstraction with auth tokens
- **DaisyUI + Tailwind CSS** – Modern and responsive UI

---

## ✨ Core Features

- 🔐 **Secure Auth Flow**
  - User Registration and Login
  - JWT tokens and cookie-based auth
  - Encrypted passwords with bcrypt

- 💬 **Real-Time Messaging**
  - Two-way real-time chat with **Socket.IO**
  - Private user-to-user messaging
  - Server-based message broadcasting

- 🎨 **Polished UI**
  - Clean, mobile-friendly layout using **DaisyUI**
  - Auto-scroll, notification sounds, etc.

- 📦 **Redux Thunk with Axios**
  - Global state with Redux Toolkit
  - Async API requests using `createAsyncThunk` and a configured `axiosInstance`

---

## 🧠 Project Structure (Simplified)

---

## 🏗️ Backend Project Structure

```bash
server/
├── controllers/             # Business logic for handling requests
│   ├── userController.js        # Handles user-related operations (login, register, etc.)
│   └── messageController.js     # Handles message logic (send, fetch, etc.)
│
├── models/                 # Mongoose schemas for database collections
│   ├── User.js                 # User schema with credentials & metadata
│   ├── Message.js              # Chat message schema
│   └── Connection.js           # Tracks user socket connections
│
├── routes/                 # Express route definitions
│   ├── userRoutes.js           # /api/users
│   └── messageRoutes.js        # /api/messages
│
├── socket/                 # All real-time socket logic
│   └── socketHandler.js        # Socket.IO initialization and events
│
├── utilities/              # Custom utility functions
│   ├── asyncHandler.js          # 🔁 Wrapper to avoid repetitive try-catch blocks
│   └── errorHandler.js         # 🧨 Custom error class & reusable error logic
│
├── middlewares/            # Express middlewares
│   ├── authMiddleware.js       # 🔐 JWT token verification (route protection)
│   └── errorMiddleware.js      # 🚨 Global error catcher and formatter
│
├── db/                    # Database connection logic
│   └── connectDB.js            # MongoDB Atlas connection setup
│
├── index.js               # 🧠 Entry point: sets up Express, MongoDB, and Socket.IO
└── .env                   # 🔒 Environment variables (Mongo URI, JWT secret, etc.)

```

## 🖼️ Frontend Project Structure (`/client/src`)

```bash
client/
└── src/
    ├── components/                  # Reusable components and shared utilities
    │   ├── ProtectedRoute.jsx           # 🔐 Wrapper to guard private routes
    │   └── utils/
    │       └── axiosInstance.js         # 🚀 Pre-configured Axios with JWT support
    │
    ├── pages/                      # Main route-based pages
    │   ├── auth/                       # Authentication views
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   │
    │   └── home/                       # Main chat UI
    │       ├── Home.jsx
    │       ├── UsersSidebar.jsx
    │       ├── MessageContainer.jsx
    │       ├── SendMessage.jsx
    │       └── Message.jsx
    │
    ├── store/                      # 🔥 Redux Toolkit-based global state management
    │   ├── store.js                    # Root Redux store config
    │   └── slice/
    │       ├── user/
    │       │   ├── userSlice.js           # User state (auth, profile)
    │       │   └── userThunk.js           # Async actions: login, register, fetch profile
    │       │
    │       ├── message/
    │       │   ├── messageSlice.js        # Chat/message state
    │       │   └── messageThunk.js        # Send and retrieve messages
    │       │
    │       └── socket/
    │           ├── socketSlice.js         # Socket connection/presence
    │           └── socketThunk.js         # (Optional) Future real-time actions
    │
    ├── App.js                      # Route management
    └── index.js                    # Entry point – ReactDOM, Redux Provider
```

---
## 🛠️ Deployment on Render

### 🌐 Backend (Render Web Service)


---

## 🧑‍🏫 How to Use This Chat App

1. **Visit the live site**  
   👉 [Open App](https://your-live-link-here.com)

2. **Create an account**  
   - Go to the **Signup page**
   - Use a valid username, email, and password (which is securely hashed)

3. **Login securely**  
   - JWT token will be stored in cookies
   - Protected routes are only accessible after login

4. **Start chatting!**  
   - Select a user to chat with
   - Your messages are delivered in real time via **Socket.IO**
   - Messages are broadcast if no specific recipient is selected

5. **Logout anytime**
   - Token is cleared and you’re redirected to the login screen

> ⚠️ If you're running locally, make sure your `.env` and backend/frontend URLs match up correctly.

---

## 📚 What I Learned During This Project

This project helped me grow both technically and in how I approach full-stack development. Here's a breakdown:

### 🔐 Authentication
- Learned how to use **JWT tokens** for secure login and route protection.
- Implemented **cookie-based token storage** for better security than localStorage.
- Used **bcrypt** to hash passwords and prevent raw credential storage.

### 🧵 Redux Toolkit + Thunks
- Used `createAsyncThunk` to manage async API calls
- Centralized global state with **Redux Toolkit slices**
- Built an **axiosInstance** to automatically inject JWT tokens into headers

### 📡 Real-Time Communication
- Understood how **Socket.IO** enables real duplex messaging
- Handled different event types like connect, disconnect, message, and typing

### 🎨 UI and Design
- Explored **DaisyUI** and **Tailwind CSS** to build modern, responsive UI fast
- Learned how to structure reusable components in React

### ☁️ Deployment
- Deployed backend as a **Render Web Service**
- Deployed frontend as a **Render Static Site**
- Managed **environment variables securely** in production

### 🧩 Full-Stack Project Management
- Designed both backend and frontend integration points
- Handled cross-origin issues with **CORS**
- Built clean folder structures for scalable development

---

## 🧠 My Key Takeaways

- Real-time systems are complex but fun!
- Redux can simplify state handling a lot—especially with async code
- Deployment isn't just "upload and done" — managing `.env`, CORS, and client-server sync is crucial
- Writing modular, clean, and scalable code pays off in the long run
- Secure auth should never be an afterthought

---
🔮 Future Updates (Planned)
✅ Read / Delivered message status

✅ Group chat functionality

✅ Emoji & file sharing support

✅ Improved message UI with timestamps

✅ User online/offline indicators

---

## 🛠️ How to Clone and Run This Project Locally (Single Server Setup)

This app is a full-stack project where the **React frontend is served directly from the Node.js backend** after building.

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/Mithila-Stack-Training-and-Development/socketChat.git
cd socketChat

# Install backend (and devDependencies like nodemon)
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


cd client
npm run build

cd client
npm run build

# Go to server
cd server

# Start server (dev mode)
npm run dev
```
## 👨‍💻 Author

**Ankit — B.Tech CSE, 3rd Year**

- 🔗 [LinkedIn](https://www.linkedin.com/in/ankit01kr/)
- 💻 [GitHub](https://github.com/chaudharycoder)

---
