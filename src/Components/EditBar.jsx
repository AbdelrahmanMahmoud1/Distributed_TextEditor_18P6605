import React from "react";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
function EditBar(){

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
            <li style = {style}> <Button style = {buttonStyle} variant="primary">UnderLine</Button></li>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">Bold</Button></li>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">Italic</Button></li>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">Increase Font</Button></li>
            <li style = {style}> <Button style = {buttonStyle} variant="primary">Decrease Font</Button></li>
        </ul>
     </div>
}

export default EditBar;