import React, {useState ,useEffect } from "react";
import EditorTextArea from './EditorTextArea'
import io from 'socket.io-client'
import Button from 'react-bootstrap/Button';

const socket = io.connect("http://localhost:3001")






function App(){

    const style = {
        display: "inline",
        marginLeft: "20px",
    
    }
    
    const buttonStyle = { 
    
    }
    
    
    const navStyle = {
        textAlign:"center"
    }
    
const[recievedData,setData] = useState("");
const[userName,setUserName] = useState("");
const[room,setRoom] = useState("");

function sendData(Data){
    const dataToServer = {
        room: room,
        author: userName,
        content: Data
    }
    setData(Data)
    socket.emit("sendData", dataToServer)
    
}

    useEffect(()=>{
   
        socket.on("recieve_message",(data)=>{
            console.log("recieved data: "+data);

            setData(recievedData + data)
            
      
        })
        
     },[socket])
function clearMessege(){
    setData("");
}

const joinRoom = () => {
    if (userName !== "" && room !== ""){
        socket.emit("join_room",room);
    }
}

socket.on('update', function (content) {
    setData(content)
});

    return <div>
       <ul style = {navStyle}>
            <li style = {style}><input type="text" placeholder="Enter your name" onChange={(event) =>{
                setUserName(event.target.value)
            }}></input></li>
            <li style = {style}><input type="text" placeholder="Enter doc id" onChange={(event) =>{
                setRoom(event.target.value)
            }}></input></li>         </ul>
        <ul style = {navStyle}>
            <li style = {style}> <Button style = {buttonStyle} variant="primary" onClick={joinRoom}>Login</Button></li>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">Create New Document</Button></li>
         </ul>
    <EditorTextArea socket={socket} 
    username = {userName}
    room = {room}
    clearReceivedMessege={clearMessege} recievedText={recievedData} changeText = {sendData}></EditorTextArea>
  
    </div>
}

export default App;