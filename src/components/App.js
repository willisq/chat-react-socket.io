import '../css/app.css';
import photo from '../img/photo.jpg';
import Message from "./Message";
import ScreenChat from './ScreenChat';
import ChatPanel from './ChatPanel';
import React, {Component} from 'react';
import io from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';
var socket = io(ENDPOINT);
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      messages : [],
      currentMessage : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.ref = React.createRef();
  }

  componentDidMount(){
    socket.on('chat message',(message) =>{
      this.setState({messages: [...this.state.messages, message]})
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.messages.length !== this.state.messages.length) this.ref.current.scrollTop = this.ref.current.scrollHeight * this.state.messages.length;
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.currentMessage){
      socket.emit('chat message', this.state.currentMessage);
      this.setState({
        messages : [...this.state.messages],
        currentMessage : ''
      });
      this.forceUpdate()
    }
  }

  handleChange(e){
    this.setState({
      currentMessage: e.target.value
    });
  }

  render(){
    const {currentMessage} = this.state;
    const {messages} = this.state;
    const message = messages.map(message =>{    
      return (
        <li className = "messageElement" key = {Math.random()} >
          <Message photo = {photo} name = "william" content = {message}></Message>
        </li>
      )
    });
    return ( 
      <div className = "chat">
        <ScreenChat  messages =  {<ul ref = {this.ref} className = "chatList"> {message}</ul>} >{message}</ScreenChat>
        <ChatPanel handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} currentMessage = {currentMessage} ></ChatPanel>
      </div>
    );  
  }
}

export default App;