import React, {useState ,useEffect } from "react";
import EditorTextArea from './EditorTextArea'
import io from 'socket.io-client'
import Button from 'react-bootstrap/Button';
import MyComponent from "./TextEditor";
import "../Style/styles.css"
const socket = io.connect("http://192.168.1.6:3001")

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
const[isFoundDoc,setDocState] = useState("");
const[isexistDoc,setexistState] = useState("");
const[isEdit,setIsEdit] = useState(false);
const[enable,setEnable] = useState(true);

function sendData(Data){
    const dataToServer = {
        room: room,
        author: userName,
        content: Data
    }
   
        setData(Data)
        console.log("Data before sending: " + dataToServer.room);
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

const createNewDoc = () => {
    if (userName !== "" && room !== ""){
        socket.emit("create_room",room);
    }
}


socket.on('update', function (content) {
    if(content === 1){
        setDocState(true)
        setexistState(false)
     
    }else if (content === 2){
        setexistState(true)
        setDocState(false)
        console.log("3aaaaaaaaaaaaaaaaaaaaaaa");

    }

    else if (content === 3){

        setDocState(false)
        setexistState(false)
        setIsEdit(room)
        setData("")
        setEnable(false)
    }
    else{
        setDocState(false)
        setexistState(false)
        setIsEdit(room)
        setData(content) 
        setEnable(false) 
    }
    
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
            <li style = {style}> <Button disabled={!enable} style = {buttonStyle} variant="primary" onClick={joinRoom}>Login</Button></li>
         
            <li onClick={createNewDoc}style = {style}> <Button disabled={!enable} style = {buttonStyle} variant="primary">Create New Document</Button></li>
            {isFoundDoc &&<li style = {style}><p style = {style}>Document not Found</p></li>}
            {isexistDoc &&<li style = {style}><p style = {style}>Document alreay exists</p></li>}
            {isEdit &&   <li style = {style}> <Button style = {buttonStyle} variant="primary" onClick={()=>{window.location.reload();  setEnable(false)}}>Logout</Button></li>
            }

         </ul>

         {isEdit && <p style = {navStyle}>You are editing Document: {isEdit} </p>}
       
    <EditorTextArea socket={socket} 
    username = {userName}
    room = {room}
    clearReceivedMessege={clearMessege}
    enable = {enable}
    recievedText={recievedData} 
    changeText = {sendData}>
       
    </EditorTextArea>
  
   
    </div>
}

export default App;