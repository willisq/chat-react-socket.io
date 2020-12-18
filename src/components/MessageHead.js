import Author from './Author';
import Avatar from './Avatar';
import '../css/messageHead.css';

const chatHead = ({ photo, name }) => {
  return ( 
    <div className = "messageHead" >
      <Avatar photo = { photo }/> 
      <Author name = { name } /> 
    </div>
  )
}

export default chatHead;