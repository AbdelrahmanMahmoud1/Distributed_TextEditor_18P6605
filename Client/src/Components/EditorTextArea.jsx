import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MyComponent from "./TextEditor";




function EditorTextArea(props){

const [text, setText] = useState("");
const [value, setValue] = useState(0);
const [values, setValues] = useState(0);
var textarea = Object();

const style = {
 
   resize: "none",
   disabled: "true"
}

function handleChange(event){
    const x = event.target.value;
    props.changeText(x)
    setText(x);
    console.log(event.target.selectionEnd);
    setValue(event.target.selectionEnd);
    setValues(event.target.selectionstart);
     textarea =  event.target;

    // event.target.selectionStart = 0 
    // event.target.selectionEnd = 0

  
}
function handleTextChange(sent){
    props.changeText(sent);
   
   
}


useEffect(()=>{
    
    // const interval = setInterval(() => {
    //     console.log(text);
    //     console.log(props.recievedText);
    //     props.changeText(text);
    //     setText(props.recievedText)

    // }, 5000);

    // setTimeout(()=>{
    //     console.log("gkjafkhbga");
    // }, 3000)
    // if(props.recievedText !== text){
    //     console.log("this is recieved "+props.recievedText);
    //     console.log("this is text "+text);
    //     setText(props.recievedText)
       
    // }    
    setText(props.recievedText)
    console.log();
    textarea.selectionStart = values;
    textarea.selectionEnd = value;
  
    // return () => clearInterval(interval);
    // console.log("this is recieved "+props.recievedText);

},[props.recievedText])
    return <div>
 
 
 <Container>

       
  
  <Row>
        <textarea onChange={handleChange} rows={35} cols={125} disabled={props.enable} style = {style} value={text}></textarea>
        {/* <MyComponent handleTextChange={handleTextChange} text={text} ></MyComponent> */}
        
  </Row>
  
</Container>
  
    </div>
}

export default EditorTextArea;