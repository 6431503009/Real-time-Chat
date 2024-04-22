const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Route สำหรับสร้างผู้ใช้ใหม่
io.on("connection", (socket) => {
  socket.on("newuser", (name) => {
    let newUser = name;
    console.log(`${newUser} Connected`);

    socket.on("disconnect", () => {
      console.log("User disconnected");
      socket.broadcast.emit("user-disconnected", newUser);
    });
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(5000, () => {
  console.log("listening on http://localhost:5000");
});
