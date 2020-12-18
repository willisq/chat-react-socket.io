import "../css/messageBody.css";

const MessageBody = ({content}) => {
  let date = new Date();
  return(
    <div className = "messageBody">
      <p className = "text">{content}</p>
      <span className = "date">{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</span>
    </div>
)}

export default MessageBody;