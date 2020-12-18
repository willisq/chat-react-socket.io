import '../css/message.css';
import MessageHead from './MessageHead';
import MessageBody from "./MessageBody";

const Message = ({content, photo, name}) => (
<div className = "message">
  <MessageHead photo = {photo} name = {name}></MessageHead>
  <MessageBody content = {content}></MessageBody>
</div>
);

export default Message;