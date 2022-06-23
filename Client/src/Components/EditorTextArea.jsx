import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import EditBar from "./EditBar";



function EditorTextArea(props){

const [text, setText] = useState();

const style = {
 
   resize: "none"
}

function handleChange(event){
    const x = event.target.value;
    props.changeText(x)
    setText(x)
}

useEffect(()=>{
   
    console.log("this is recieved "+props.recievedText);
    if (props.recievedText){
        setText(props.recievedText);
        props.clearReceivedMessege();
    }
   


   
})
    return <div>
 
 
 <Container>

       
  
  <Row>
        <textarea onChange={handleChange} rows={35} cols={125} style = {style} value={text}></textarea>
  </Row>
  
</Container>
  
    </div>
}

export default EditorTextArea;