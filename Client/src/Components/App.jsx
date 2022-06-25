import React, {useState ,useEffect } from "react";
import EditorTextArea from './EditorTextArea'
import io from 'socket.io-client'
import Button from 'react-bootstrap/Button';
import MyComponent from "./TextEditor";
import "../Style/styles.css"
const socket = io.connect("https://distributed-text-editior.herokuapp.com")

function App(){
    const [value, setValue] = useState(true);


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
        console.log("Data before sending: " + dataToServer.content);
        socket.emit("sendData", dataToServer)
    
    
    
}

    useEffect(()=>{
        console.log("recieved data: ");
        socket.on("recieve_message",(data)=>{
            console.log("recieved data: "+data);

            setData(recievedData + data)
            
      
        })
        
     },[value])

function clearMessege(){
    setData("");
}

const joinRoom = () => {
    if (userName !== "" && room !== ""){
        socket.emit("join_room",room);
    }
    setValue(!value)
}

const createNewDoc = () => {
    if (userName !== "" && room !== ""){
        var doc = {
            name:userName,
            room:room
        }
        socket.emit("create_room",doc);
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
        {!isEdit && <li style = {style}> <Button disabled={!enable} style = {buttonStyle} variant="primary" onClick={joinRoom}>Login</Button></li>}
         
            {!isEdit && <li onClick={createNewDoc}style = {style}> <Button style = {buttonStyle} variant="primary">Create New Document</Button></li>}
            {isFoundDoc &&<li style = {style}><p style = {style}>Document not Found</p></li>}
            {isexistDoc &&<li style = {style}><p style = {style}>Document alreay exists</p></li>}
            {isEdit &&   <li style = {style}> <Button style = {buttonStyle} variant="primary" onClick={()=>{window.location.reload();  setEnable(false)}}>Logout</Button></li>
            }

         </ul>

         {isEdit && <p style = {navStyle}>You are editing Document: {isEdit} </p>}
       
    <EditorTextArea 
    socket = {socket}
    enable = {enable}
    recievedText={recievedData} 
    changeText = {sendData}>
       
    </EditorTextArea>
  
   
    </div>
}

export default App;