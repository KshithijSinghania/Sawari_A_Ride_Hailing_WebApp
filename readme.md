# 🚗 Uber Clone – Full Stack Ride-Hailing Web App

This is a full-stack Uber-inspired web application that lets users book rides, track drivers in real-time, and view ride history. Captains (drivers) can accept rides, see earnings, and update trip status. Built using modern web technologies including React, Node.js, MongoDB, and Socket.IO.

## 🔗 Live Demo

🚧 Coming Soon (Deploy with Vercel & Render)

---

## 📦 Features

### 👤 User Functionality

- Signup/Login with JWT Authentication
- Google Maps Address Autocomplete
- Book a ride with pickup/drop locations
- Real-time ride status tracking (Socket.IO)
- Stripe payment gateway integration

### 🚕 Captain (Driver) Functionality

- Login and availability toggle
- Accept/reject incoming ride requests
- Start/end ride, update location in real-time

---

## 🛠️ Tech Stack

| Frontend                | Backend           | Real-Time | Database      |
| ----------------------- | ----------------- | --------- | ------------- |
| React.js + Tailwind CSS | Node.js + Express | Socket.IO | MongoDB Atlas |

### Additional Tools

- React Router DOM for navigation
- Axios for API requests
- GSAP for animations
- JWT for authentication
- Stripe for payments
- dotenv for environment config

---

## 📁 Folder Structure

```
Uber-Clone/
├── Frontend/            # Frontend (React)
│   └── src/
│       ├── components/
│       ├── pages/
│       └── context/   # Socket Context
├── Backend/            # Backend (Node.js + Express)
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── utils/
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- MongoDB Atlas URI
- Vite (for React build)

### 1. Clone the Repo

```bash
git clone https://github.com/KshithijSinghania/Uber-Clone.git
cd Uber-Clone
```

### 2. Start the Backend

```bash
cd server
npm install
# Create a .env file with:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
# STRIPE_SECRET_KEY=your_stripe_key
# PORT=4000
node index.js
```

### 3. Start the Frontend

```bash
cd client
npm install
# Create a .env file with:
# VITE_BASE_URL=http://localhost:4000
# VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
npm run dev
```

---

## 🌐 API Endpoints

**Auth**

- `POST /api/auth/register`
- `POST /api/auth/login`

**User**

- `GET /api/user/profile`
- `PUT /api/user/location`

**Rides**

- `POST /api/rides/book`
- `PUT /api/rides/start-ride`
- `PUT /api/rides/end-ride`
- `GET /api/rides/user`
- `GET /api/rides/captain`

**Captain**

- `GET /api/captains`
- `POST /api/captains/accept-ride`

**Payments**

- `POST /api/payment/create-checkout-session`
- `GET /api/payment/success`
- `GET /api/payment/cancel`

---

## 📈 Future Enhancements

- Push notifications 🔔
- Review & Rating system ⭐
- PWA support for mobile responsiveness 📱
- Admin dashboard for ride management 🚰

---

## 🙌 Author

**Kshithij Singhania**\
GitHub: [@KshithijSinghania](https://github.com/KshithijSinghania)

---

## 📝 License

This project is licensed under the MIT License. Feel free to fork and contribute!

