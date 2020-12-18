import '../css/like.css';
import SvgIcon from './SvgIcon';

const Like = ({numberLikes}) => (
  <div className = "likeDiv" >
    <p className = "numberLikes">{numberLikes}</p>
    <SvgIcon iconType = "like"></SvgIcon>
  </div>
);

export default Like;