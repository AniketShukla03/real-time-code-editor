// server/index.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const Code = require("./models/Code");

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
mongoose.connect("mongodb+srv://aniketUser:aniket123@cluster0.l3j6sml.mongodb.net/collab-editor?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("🔌 New client connected:", socket.id);

  socket.on("join-room", async (roomId) => {
    socket.join(roomId);
    console.log(`👥 User ${socket.id} joined room: ${roomId}`);

    // 🔄 Send existing code to the user
    const existing = await Code.findOne({ roomId });
    if (existing) {
      socket.emit("code-change", existing.code);
    }
  });

  socket.on("code-change", async ({ roomId, code }) => {
    socket.to(roomId).emit("code-change", code);

    // 💾 Save code in DB
    await Code.findOneAndUpdate(
      { roomId },
      { code },
      { upsert: true, new: true }
    );
  });

  socket.on("chat-message", ({ roomId, message }) => {
    socket.to(roomId).emit("chat-message", message);
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});

