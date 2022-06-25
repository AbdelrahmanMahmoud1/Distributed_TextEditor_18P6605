import React, { useRef,useEffect, createRef } from "react";
import ReactDOM from "react-dom";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";


class MyComponent extends React.Component {

 
  constructor(props) {
   
    super();
    const text = createRef('');
    this.state = {
      html: ``,
      editable: true
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.text !== this.props.text){
      this.text = this.props.text 
    }
  
  }
 
  handleChange = evt => {
    this.text = evt.target.value
    console.log( this.text);
    // this.setState({ html: evt.target.value });
    // this.setState({ text: sanitizeHtml(evt.target.value, this.sanitizeConf) });
    this.props.handleTextChange( this.text)

  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] }
  };

  sanitize = () => {
   console.log( this.text);
    // this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
    // this.props.handleTextChange(this.state.html)
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  

  render = () => {
  
    return (
      <div>
        <h3>editable contents</h3>
        <ContentEditable
          className="editable"
          tagName="pre"
          html={ this.text} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
        
        />
       
        <h3>actions</h3>
        <EditButton cmd="italic" />
        <EditButton cmd="bold" />
        <EditButton cmd="formatBlock" arg="h1" name="heading" />
        <EditButton
          cmd="createLink"
          arg="https://github.com/lovasoa/react-contenteditable"
          name="hyperlink"
        />
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button>
        <h1>{this.props.text}</h1>
      </div>
    );
  };
}

function EditButton(props) {
  return (
    <button
      key={props.cmd}
      onMouseDown={evt => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
      }}
    >
      {props.name || props.cmd}
    </button>
  );
}

export default MyComponent
