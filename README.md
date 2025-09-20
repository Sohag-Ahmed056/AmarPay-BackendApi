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

## 📂 Project Structure (Example)
