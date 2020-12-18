import '../css/screenChat.css';
import React, { Component } from "react";

class ScreenChat extends Component{

  render(){
    return(
      <div className = "screenChat"  >
        {this.props.messages}
      </div>
    );
  }
} 

export default ScreenChat;