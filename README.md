# 💻 CodeSnippet Library - Smart Code Management Web Application

## 🌐 Live Demo

🚀 **Frontend + Backend (Deployed Full Stack):**  
👉 [https://codesnippet-frontend.onrender.com](https://codesnippet-frontend.onrender.com)

---

## 🧩 Overview

**CodeSnippet Library** is a full-stack web application built using **React (Vite)** for the frontend and **Spring Boot + MySQL** for the backend.  
It helps developers **create, manage, and organize code snippets** in multiple programming languages with a clean, responsive UI.

It allows users to:

🧠 Create and save personal code snippets  
✏️ Edit and update existing snippets  
🗑️ Delete unwanted snippets  
🔒 Securely access snippets through authentication  
💾 Store all data in a connected MySQL database  

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- React (Vite)
- Tailwind CSS
- JavaScript (ES6)
- Fetch API
- Responsive Design

### 🧠 Backend
- Spring Boot (Java)
- RESTful APIs
- Spring Security (Basic Auth)
- Hibernate / JPA
- MySQL (Clever Cloud)
- Deployed on Render

---

## 📦 Features

✅ User Authentication (Signup / Login using Basic Auth)  
✅ Add, Edit, and Delete personal code snippets  
✅ Secure backend API with CORS configuration  
✅ Responsive design for all devices  
✅ MySQL database connectivity via Spring JPA  
✅ Fully deployed with frontend, backend, and database connected  

---

## 🗃️ API Endpoints

### 👤 Authentication
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user and verify credentials |

### 💾 Code Snippets
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/code/my` | Fetch all code snippets for logged-in user |
| POST | `/api/code/add` | Add new code snippet |
| PUT | `/api/code/update/{id}` | Update existing snippet |
| DELETE | `/api/code/delete/{id}` | Delete a snippet by ID |

---

## 💾 Database

- Hosted on **Clever Cloud MySQL**
- Connected securely to the Spring Boot backend via **JPA/Hibernate**
- Tables used:
  - `users` — stores registered users
  - `snippets` — stores code snippet details (title, description, language)
- Database connection optimized using **HikariCP** for performance

---

## 🚀 Deployment

| Layer | Platform |
|--------|-----------|
| **Frontend** | Render (Static Site) |
| **Backend** | Render (Spring Boot Web Service) |
| **Database** | Clever Cloud (MySQL) |

---

## 🧠 Developer

👨‍💻 **Zaid Asfi**  
🎓 Mechanical Engineer → Java Full Stack Developer  
📍 Pune, Maharashtra & Delhi, India  
📧 [zaidasfi02@gmail.com](mailto:zaidasfi02@gmail.com)  
🌐 GitHub: [Zaidasfi02](https://github.com/Zaidasfi02)

---

## 🏁 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Zaidasfi02/CodeSnippet.git
cd CodeSnippet

