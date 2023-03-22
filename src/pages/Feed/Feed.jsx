import "./feed.scss";
import {
  BsPencilSquare,
  RiArticleFill,
  RiVideoFill,
  MdAddPhotoAlternate,
  MdEvent,
} from "react-icons/all";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__icon">
        <BsPencilSquare />
      </div>
      <input
        type="text"
        className="feed__input"
        placeholder="Write Something..."
      />
      <div className="bottm__icons">
        <MdAddPhotoAlternate /> <RiVideoFill /> <MdEvent /> <RiArticleFill />
      </div>
    </div>
  );
};

export default Feed;
