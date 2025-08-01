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
🧪 Run Locally
 1. Clone the repo:



2. Start Backend (Port 4000):
bash
Copy
Edit
cd server
npm install
node index.js
3. Start Frontend (Port 3000):
bash
Copy
Edit
cd client
npm install
npm start
Then go to: http://localhost:3000/room123

📁 Project Structure
bash
Copy
Edit
realtime-code-editor/
├── client/     # React frontend
├── server/     # Express backend + MongoDB
├── .gitignore
└── README.md
📸 Screenshots (add later)
css
Copy
Edit
[ ] Code editor UI
[ ] Chat window
[ ] Mobile responsive view
✍️ Author
Made with ❤️ by Aniket Ajay Shukla

🧑‍💼 Deployment Checklist (To Do)
 Deploy frontend to Vercel

 Deploy backend to Render

 Replace local URLs in App.js

 Add deployment links here

yaml
Copy
Edit

---

## ✅ STEP 5: Upload Project to GitHub via Web

1. On GitHub repo page → click **“Add file > Upload files”**
2. **Drag and drop**:
   - The full `client/` folder  
   - The full `server/` folder  
   - `.gitignore`  
   - `README.md`
3. Click **“Commit changes”**

✅ Done!

---

## ✅ STEP 6 (Later): Add Hosting URLs

Once all projects are done and we deploy to Vercel/Render:
- You’ll come back and **edit README**
- Add:
  - 🌐 Live demo link
  - 🟦 Backend API link

---

Let me know once the upload is done — and if you want to start **Project 2** next, say the word 🔐📁✨  
You’re building a portfolio that’ll land you interviews fast.
git clone https://github.com/YOUR_USERNAME/real-time-code-editor.git
cd real-time-code-editor
