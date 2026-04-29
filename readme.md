

# 🚀 Hackathon Buddy

A full-stack MERN platform that intelligently matches hackathon participants with the right teammates, projects, and now **live hackathons across platforms**.

---
📸 UI Preview
🏠 Dashboard
<p align="center"> <img src="https://github.com/user-attachments/assets/c776b2fd-cc2d-4b22-afc0-69060e21fdc9" width="90%" /> </p>
🤝 Matching Page
<p align="center"> <img src="https://github.com/user-attachments/assets/4d51e710-8a3b-48aa-8465-f4207a618691" width="90%" /> </p>
📦 Projects Page
<p align="center"> <img src="https://github.com/user-attachments/assets/278764c4-831b-4412-958e-ed5fe9622971" width="90%" /> </p>
🌍 Hackathons Page
<p align="center"> <img src="https://github.com/user-attachments/assets/f59868c7-f4d9-44ff-a041-853c2a4774c3" width="90%" /> </p>
👤 Collaborative Editor
<p align="center"> <img src="https://github.com/user-attachments/assets/0d871982-9c1e-481b-b69a-8cf70d7047d8" width="90%" /> </p>
👤 Profile Page
<p align="center"> <img src="https://github.com/user-attachments/assets/d8c69040-7ef1-4e2c-a77e-f8feb3d2bcb0" width="90%" /> </p>



## 🌟 Key Features

### 🧠 Smart Team Matching

Matches users based on:

| Factor             | Weight | Method               |
| ------------------ | ------ | -------------------- |
| Skills             | 50%    | Jaccard similarity   |
| Interests          | 30%    | Jaccard similarity   |
| Role Compatibility | 20%    | Compatibility matrix |

* Score range: **0–100**
* Returns **Top 5 best matches**

---

### 🧑‍💻 Project Collaboration

* Create / join / leave projects
* Role-based team building
* Project-specific chat rooms

---

### 💬 Real-time Chat (Persistent)

* Built with **Socket.io**
* Room-based messaging per project
* Stores chat history in MongoDB
* Loads last 100 messages on join

**Socket Events:**

* `join_room`
* `send_message`
* `receive_message`
* `room_history`

---

### 🌍 Hackathon Discovery (NEW 🚀)

Browse hackathons from multiple platforms in one place:

* Devpost
* Devfolio
* HackerEarth
* Unstop

**Features:**

* Live aggregated hackathon feed
* Filters:

  * Platform
  * Mode (Online / Hybrid / In-person)
  * Status (Open / Upcoming)
* Search by tags, organizers
* Sort by prize

---

## 🏗️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Socket.io
* bcryptjs

### Frontend

* React 18
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Socket.io-client

---

## 📁 Project Structure

```
hackathon-buddy/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── projects.js
│   │   ├── match.js
│   │   ├── github.js
│   │   └── hackathon.js   # NEW
│   ├── services/
│   ├── middleware/
│   ├── sockets/
│   │   └── editorSocket.js
│   └── server.js
│
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       │   ├── Dashboard.jsx
│       │   ├── Matching.jsx
│       │   ├── Projects.jsx
│       │   ├── Hackathons.jsx  # NEW
│       │   ├── Profile.jsx
│       │   └── Chat.jsx
│       ├── context/
│       ├── services/
│       └── utils/
```

---

## ⚙️ Setup Instructions

### Prerequisites

* Node.js v18+
* MongoDB (local or Atlas)

---

### 1️⃣ Backend Setup

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Server runs on:
👉 [http://localhost:5000](http://localhost:5000)

---

### 2️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:
👉 [http://localhost:5173](http://localhost:5173)

---

## 🔐 Environment Variables

### `server/.env`

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/hackathon-buddy
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

---

## 🔌 API Endpoints

### 🔐 Auth

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

---

### 👤 Users

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/users/me     |
| PUT    | /api/users/update |
| GET    | /api/users/all    |

---

### 📦 Projects

| Method | Endpoint                |
| ------ | ----------------------- |
| POST   | /api/projects           |
| GET    | /api/projects           |
| GET    | /api/projects/my        |
| POST   | /api/projects/join/:id  |
| POST   | /api/projects/leave/:id |

---

### 🤝 Matching

| Method | Endpoint            |
| ------ | ------------------- |
| GET    | /api/match/users    |
| GET    | /api/match/projects |

---

### 🌍 Hackathons (NEW)

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/hackathons |

---

## 🔄 Real-time Chat Flow

1. User joins project
2. `join_room` event triggered
3. Server sends `room_history`
4. User sends message → `send_message`
5. Server saves to DB
6. Broadcast via `receive_message`

---

## 📸 UI Preview

* Dashboard
* Matching Page
* Projects Page
* Hackathons Page
* Chat System

*(Add screenshots here for GitHub impact)*

---

## 🚧 Known Issues

* Hackathon prize field sometimes shows raw HTML (`<span>`) → needs parsing fix
* No pagination in chat (limit: 100 messages)
* No authentication validation in socket events

---

## 🔮 Future Improvements

* [ ] AI-based hackathon recommendations
* [ ] Chat pagination + infinite scroll
* [ ] Typing indicators
* [ ] Notifications system
* [ ] OAuth (GitHub login)
* [ ] Email verification
* [ ] Better hackathon data sanitization

---

## 🧪 Testing

* Chat works across multiple users
* Messages persist in MongoDB
* Hackathon data loads with filters
* Matching algorithm returns top 5 users

---

## ⚠️ Reality Check (Important)

* You built **a strong MVP**, not a production-ready system
* Biggest weak points:

  * No validation on socket layer
  * Hackathon data parsing is sloppy
  * No caching → API will slow down
* If you show this in interview, be ready to explain:

  * scaling strategy
  * data normalization
  * real-time architecture

---

## 🏁 Conclusion

Hackathon Buddy now combines:

* **Smart team matching**
* **Project collaboration**
* **Real-time communication**
* **Hackathon discovery**

This makes it a **complete ecosystem for hackathon participants**, not just a matching tool.

---
