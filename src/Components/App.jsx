import React, {useState ,useEffect } from "react";
import EditorTextArea from './EditorTextArea'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001")




function sendData(Data){
   
    socket.emit("sendData", Data)
}



function App(){

    
const[recievedData,setData] = useState("");

    useEffect(()=>{
   
        socket.on("recieve_message",(data)=>{
            console.log(data);
            setData(recievedData + data)
            
      
        })
        
     },[socket])
function clearMessege(){
    setData("");
}

    return <div>
     
    <EditorTextArea clearReceivedMessege={clearMessege} recievedText={recievedData} changeText = {sendData}></EditorTextArea>
  
    </div>
}

export default App;