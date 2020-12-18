import {Component} from 'react';
import '../css/avatar.css';

class Avatar extends Component{
  render(){
    return(
      <img className = "avatar" alt = "" src = {this.props.photo} />
    )
  }
}
export default Avatar;