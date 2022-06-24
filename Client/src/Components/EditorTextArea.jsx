import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MyComponent from "./TextEditor";




function EditorTextArea(props){

const [text, setText] = useState("");



const style = {
 
   resize: "none",
   disabled: "true"
}

function handleChange(event){
    const x = event.target.value;
    props.changeText(x);
    setText(x);
   console.log(props.what);
}
function handleTextChange(sent){
    props.changeText(sent);
    setText(sent);
   
}

useEffect(()=>{
   
    if(props.recievedText !== text){
        console.log("this is recieved "+props.recievedText);
        console.log("this is text "+text);
        setText(props.recievedText)
    }
 
})
    return <div>
 
 
 <Container>

       
  
  <Row>
        <textarea onChange={handleChange} rows={35} cols={125} disabled={props.enable} style = {style} value={text}></textarea>
        
        
  </Row>
  
</Container>
  
    </div>
}

export default EditorTextArea;