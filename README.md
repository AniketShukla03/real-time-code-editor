# 🧑‍💻 Real-Time Collaborative Code Editor

A real-time code editor built with React, Node.js, Socket.IO, and MongoDB. Collaborate with others in real-time, chat in the sidebar, and persist your code using MongoDB.

---

## 🌐 Hosting (Coming Soon)

- **Frontend (Vercel)** → `/client` will be deployed to [https://vercel.com](https://vercel.com)
- **Backend (Render)** → `/server` will be deployed to [https://render.com](https://render.com)
- **Database** → MongoDB Atlas (already cloud-hosted)

---

## 🛠️ Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Frontend  | React, Monaco Editor, Socket.IO Client |
| Backend   | Node.js, Express, Socket.IO |
| Database  | MongoDB Atlas        |
| Hosting   | Vercel (frontend), Render (backend) |

---

## 🌟 Features

- 🔗 Room-based collaboration via unique URLs (`/room123`)
- 🔄 Real-time code sync using WebSockets (Socket.IO)
- 💬 Live chat with all connected users in the same room
- 💾 Auto-save to MongoDB
- 🔁 Reload session & resume coding later
- ⚡ Deployed (Coming Soon)

---

## 🧪 Run Locally

### 1. Clone the repo:
```bash


realtime-code-editor/
├── client/     # React frontend
├── server/     # Express backend + MongoDB
├── .gitignore
└── README.md

git clone https://github.com/YOUR_USERNAME/real-time-code-editor.git
cd real-time-code-editor
