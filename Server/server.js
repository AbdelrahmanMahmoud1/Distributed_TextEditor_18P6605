const express = require('express');
const app = express();
const http = require('http');
const cors = require("cors");
const { Server } = require("socket.io");
const path = require('path');
const publicPath = path.join(__dirname+'/public');

const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://AbdelrahmanMahmoud:r9vB-gi6dvbVfSb@cluster0.plids.mongodb.net/?retryWrites=true&w=majorityTextEditorDB');
mongoose.connect("mongodb+srv://AbdelrahmanMahmoud:r9vB-gi6dvbVfSb@cluster0.plids.mongodb.net/TextEditorDB");
var contentA = [];
var users = []
const TextEditorSchema = new mongoose.Schema({
  room:String,
  author:String,
  content:String
})

const TextEdit = mongoose.model("TextEditor",TextEditorSchema);




// content1.save();

TextEdit.find(function(err,contentFromDB){
  if(err){
    console.log(err);
  }else{
console.log(contentFromDB[0].room);
contentA = contentFromDB;
  }
})

app.use(cors());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});



class createContent {
  constructor(room, content, author) {
    this.room = room,
      this.content = content,
      this.author = author;
  }
}





const server = http.createServer(app);
let port = process.env.PORT;
if (port == null || port == ""){
  port= 3001;
}

const io = new Server(server,{
    cors: {
        origin: "*",
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
      if(contentA[i].room === data.room){
        isFound = false;
        create = false;
       
      }
      i++;
    }


    i = 0;
    if(create){
      socket.join(data.room);
      console.log("user with ID:"+ data.name + "joined room: "+ data.room);
      console.log("content in join room: "+contentA);
      contentA.push(new createContent(data.room,"",data.name))
      console.log(contentA);
      console.log("New doc created");
      createRecord(data.room,data.name)
      socket.emit("update","");
    }else{
      socket.emit("update",2);
    }





   

  })

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  socket.on("sendData", (Data) => {
    
    console.log("data in server",Data);
    contentA.forEach((item) =>{ if(item.room === Data.room){
       item.content = Data.content;
       updateRecord(Data.room,Data.content)
       socket.to(item.room).emit("recieve_message",item.content); 
       console.log("this is content in server: "+item.content);}})
 
   
   
  })
  

  socket.on("disconnect",()=>{
    console.log("User Disconnected"),socket.id;
  })
});

function createRecord(room,author){
  var x = new TextEdit({
    room:room,
    author:author,
    content:""
  })
  x.save();
  console.log("updated successfully");
}

function updateRecord(room,content){
  TextEdit.findOneAndUpdate({room:room}, {content:content}, (err)=>{
    if (err){
      console.log(err);
    }else{
      console.log("updated successfully");
    }
  })
}

server.listen(port, () => {
  console.log('listening on *:3001');
});