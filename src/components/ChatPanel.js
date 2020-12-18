import '../css/chatPanel.css';
import {Component} from 'react';

class ChatPanel extends Component{
  constructor(props){
    super(props);
    this.state = {
      value : this.props.currentMessage
    }
  }

  render(){
    const {handleSubmit} = this.props; 
    const {currentMessage} = this.props;
    const {handleChange} = this.props; 
    return (
      <form className = "chatForm" onSubmit = {handleSubmit} >
        <input type = "text" placeholder = "Escribe un mensaje" value = {currentMessage} className = "chatInput" onChange = {handleChange} ></input>
        <input type = "submit" value = "Enviar mensaje" className = "handleSubmit"></input>
      </form>
    )
  }
}

export default ChatPanel;