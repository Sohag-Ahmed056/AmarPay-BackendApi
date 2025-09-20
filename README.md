# 💳 AmarPay – Digital Wallet  

## 🚀 Project Overview  
**AmarPay** is a **secure, scalable, and modern digital wallet system** designed to simplify financial transactions.  
Built with **TypeScript, Express.js, Mongoose, and REST APIs**, and deployed on **Vercel**, AmarPay allows:  

- Users to **manage funds, send/receive money**, and perform **cash-in/cash-out** through agents.  
- Admins to have **complete control** over users, wallets, agents, and transactions.  

---

## ✨ Key Features  

### 👤 Authentication & Roles  
- 🔑 **JWT-based authentication**  
- 👨‍💼 Roles: **Admin, User, Agent**  
- 🚫 **Role-based route protection**  

### 👨‍👩‍👦 User Features  
- 💳 Automatic **wallet creation** with initial balance  
- 💰 Add money & withdraw money  
- 🔄 Send/receive money instantly  
- 📜 View complete transaction history  

### 🧑‍💻 Agent Features  
- 💵 Perform **cash-in / cash-out** for users  
- 💸 Earn commissions on transactions  
- 🔓 Request approval from Admin  

### 🛡️ Admin Features  
- 👁️ View & monitor all data  
- 🔐 **Block / Unblock** wallets  
- ✅ **Approve / Suspend** agents  
- 📊 Full control over transactions  

### 📊 System Features  
- 📜 **Transaction history tracking**  
- 🔍 Query builder: **search, filter, sort, paginate**  
- ⚡ **Scalable REST API** design  

---

## ⚙️ Technologies Used  
- **Node.js + Express.js** → Backend framework  
- **TypeScript** → Strongly-typed server-side development  
- **MongoDB + Mongoose** → NoSQL database with schema modeling  
- **JWT (JSON Web Token)** → Authentication & authorization  
- **bcrypt** → Secure password hashing  
- **REST API** → Standardized API communication  
- **Vercel** → Deployment & hosting  

---

## 🔒 Security  
- ✅ Passwords encrypted with **bcrypt**  
- ✅ **JWT-based role authentication** (Admin, User, Agent)  
- ✅ All sensitive APIs are **role-protected**  

---
# 🌐 API Endpoints  

## 🔑 Auth Routes (`/api/v1/auth`)  
- **POST** `/login` → Login user  
- **POST** `/logout` → Logout user  

---

## 👤 User Routes (`/api/v1/user`)  
- **POST** `/register` → Register new user  
- **PATCH** `/` → Update logged-in user  
- **PATCH** `/:id/status` → Update user status (**Admin only**)  
- **PATCH** `/change-password` → Change own password  
- **DELETE** `/:id` → Delete user (**Admin only**)  
- **GET** `/` → Get all users (**Admin only**)  
- **GET** `/me` → Get logged-in user info  
- **GET** `/agents` → Get all agents (**Admin only**)  
- **POST** `/agents/become-agent` → Apply to become agent (**User only**)  

---

## 💳 Wallet Routes (`/api/v1/wallet`)  
- **GET** `/` → Get all wallets (**Admin only**)  
- **GET** `/:id` → Get wallet by ID (**User/Agent/Admin**)  
- **PATCH** `/block/:id` → Block wallet (**Admin only**)  
- **PATCH** `/unblock/:id` → Unblock wallet (**Admin only**)  
- **PATCH** `/deactivate` → Deactivate own wallet  
- **PATCH** `/activate` → Activate own wallet  

---

## 💰 Transaction Routes (`/api/v1/transaction`)  
- **POST** `/add-money` → Add money to wallet  
- **POST** `/withdraw-money` → Withdraw money from wallet  
- **POST** `/send-money` → Send money to another wallet  
- **GET** `/history` → Get logged-in user’s transaction history  
- **POST** `/cash-in` → Cash in to user wallet (**Agent only**)  
- **POST** `/cash-out` → Cash out from wallet (**User only, handled by agent**)  
- **GET** `/` → Get all transactions (**Admin only**)  
- **POST** `/parameters/create` → Create transaction parameters (**Admin only**)  
- **PATCH** `/parameters/update` → Update transaction parameters (**Admin only**)  

---

## 🧑‍💼 Agent Request Routes (`/api/v1/agent-request`)  
- **PATCH** `/handle-request/:id` → Handle agent request (**Admin only**)  
- **GET** `/` → Get all agent requests (**Admin/User**)  

---

## 🏠 Root  
- **GET** `/` → Health check → `"Server is running..."`  

