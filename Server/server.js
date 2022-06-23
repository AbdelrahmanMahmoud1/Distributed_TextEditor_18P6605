const express = require('express');
const app = express();
const http = require('http');
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);


const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"] 
    }
});

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket.id);

  socket.on("sendData", (Data) => {
    console.log("data in server",Data);
    socket.broadcast.emit("recieve_message",Data);
  })

  socket.on("disconnect",()=>{
    console.log("User Disconnected"),socket.id;
  })
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});