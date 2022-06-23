import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
function Login(){

const style = {
    display: "inline",
    marginLeft: "20px",

}

const buttonStyle = { 

}


const navStyle = {
    textAlign:"center"
}

    return <div style={navStyle}>
        <ul style = {navStyle}>
            <li style = {style}><input type="text" placeholder="Enter your name" ></input></li>
            <li style = {style}></li>
         </ul>
        <ul style = {navStyle}>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">UnderLine</Button></li>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">Bold</Button></li>
         </ul>
     </div>
}

export default Login;