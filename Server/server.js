const express = require('express');
const app = express();
const http = require('http');
const cors = require("cors");
const { Server } = require("socket.io");
const path = require('path');
const publicPath = path.join(__dirname, '..', 'Client/public');
app.use(cors());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});


var content = "";

class createContent {
  constructor(room, content, author) {
    this.room = room,
      this.content = content,
      this.author = author;
  }
}


var contentA = [];

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

const io = new Server(server,{
    cors: {
        origin: "http://192.168.1.6:3000",
        methods: ["GET","POST"] 
    }
});



io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket.id);



  socket.on("join_room", (data) => {
    var isFound = true;
    socket.join(data);
    console.log("user with ID:"+ socket.id + "joined room: "+ data);
    console.log("content in join room: "+contentA);
    contentA.forEach((cont) =>{


      if(cont.room === data){
       
        socket.emit("update",cont.content);
        isFound = false
      } 
    })


    if (isFound){
      console.log(data);
      console.log(" doc not found");
      socket.emit("update",1);
    }
    

    
  })

  socket.on("create_room", (data) => {
    var isFound = true;
    var create = true;
    var i = 0;
    console.log("length: "+ contentA.length);
    while(isFound && (i < contentA.length)){
      console.log("i am inside");
      if(contentA[i].room === data){
        isFound = false;
        create = false;
       
      }
      i++;
    }

    i = 0;
    if(create){
      socket.join(data);
      console.log("user with ID:"+ socket.id + "joined room: "+ data);
      console.log("content in join room: "+contentA);
      contentA.push(new createContent(data,"",socket.id))
      console.log(contentA);
      console.log("New doc created");
 
      socket.emit("update","");
    }else{
      socket.emit("update",2);
    }





   

  })

  

  socket.on("sendData", (Data) => {
    
    console.log("data in server",Data);
    contentA.forEach((item) =>{ if(item.room === Data.room){ item.content = Data.content;socket.to(item.room).emit("recieve_message",item.content); console.log("this is content in server: "+item.content);}})
 
   
   
  })
  

  socket.on("disconnect",()=>{
    console.log("User Disconnected"),socket.id;
  })
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});