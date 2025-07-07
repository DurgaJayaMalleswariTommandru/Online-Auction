
# 🛒 Online Auction System

## Overview
This is a full-featured **Online Auction System** that allows **sellers** to post items and **customers** to bid on them. Built with **HTML, CSS, JavaScript** for the frontend and **Node.js, MongoDB** for the backend, it ensures smooth and real-time auction experiences.

---

## ✨ Key Features
- Login/Register for **Sellers** and **Customers**
- **Sellers** can add items to auction
- **Customers** can place bids
- Shows highest bids in real-time
- Stores data securely using MongoDB

---

## 🛠️ What We Used
- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js  
- **Database**: MongoDB (with Mongoose)  
- **Security**: Password authentication

---

## 🚀 How to Set It Up

### ✅ What You Need First
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) or MongoDB Atlas (cloud)

---

### 📂 Steps to Install

1. **Download or Clone the Project**
   ```bash
   git clone https://github.com/your-username/online-auction.git
   cd online-auction
   ```

2. **Go to the Backend Folder**
   ```bash
   cd backend
   ```

3. **Install All Required Packages**
   ```bash
   npm install
   ```

4. **Create a `.env` File**  
   Inside the backend folder, create a `.env` file:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Run the Backend Server**
   ```bash
   node server.js
   ```

6. **Open Frontend**
   Go to the `frontend` folder and open `main.html` in your browser.

---

## 📁 Project Structure
```
online-auction/
├── project/
│   ├── index.html
│   ├── sellerlogin.html
│   ├── customerlogin.html
│   ├── sellerregistration.html
│   ├── customerregistration.html
│   └── ... (CSS & JS files)
├── backend/
│   ├── server.js
│   ├── models/
│   ├──public/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   └── config/
├── .env
└── README.md
```

---

## 🧪 Usage

1. Open your browser and go to `main.html`.
2. Sellers can login or register and add new items for bidding.
3. Customers can view available items and place bids.
4. Both users can manage their respective dashboards.

---

## 📌 Challenges Faced

- Setting up MongoDB and handling connection errors
- Validating form inputs and showing messages without page reload
- Handling authentication securely (hashing, backend verification)
- Managing bid logic and updates efficiently

---

## 🔒 License

This project is open-source and free for educational and non-commercial use.

---
## ⚠️ Problems We Solved

- MongoDB not connecting — fixed with correct `.env` setup  
- Form data wasn’t saving — fixed by backend API integration  
- Passwords needed to be secure — used hashing  
- Bidding needed to update properly — handled in backend logic
---

## 📬 Contact

- **Developer**: Durga Jaya Malleswari Tommandru 
- **Email**: durgatommandru@gmail.com

---
