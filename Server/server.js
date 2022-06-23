const express = require('express');
const app = express();
const http = require('http');
const cors = require("cors");
const { Server } = require("socket.io");
const path = require('path');
const publicPath = path.join(__dirname, '..', 'Client/public');
app.use(cors());
app.use(express.static(publicPath));

app.get('*', (req, res) => {

  res.sendFile(path.join(publicPath, 'index.html'));
});

var content = "";

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

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


  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("user with ID:"+ socket.id + "joined room: "+ data);
    console.log("content in join room"+content);
    socket.emit("update",content);
  })

  socket.on("sendData", (Data) => {
    
    console.log("data in server",Data);
    content = Data.content
    console.log("this is content: "+content);
    socket.to(Data.room).emit("recieve_message",Data.content);
  })
  

  socket.on("disconnect",()=>{
    console.log("User Disconnected"),socket.id;
  })
});

server.listen(PORT, () => {
  console.log('listening on *:3001');
});