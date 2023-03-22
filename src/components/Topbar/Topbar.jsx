import "./Topbar.scss";
import { Avatar } from "@mui/material";

const Topbar = ({ avatar, title, Icon }) => {
  return (
    <div className="topbar">
      {Icon && <Icon className="topbar__icon" />}

      {avatar && <Avatar className="topbar__icon" src={avatar} />}
      <h3 className="topbar__text">{title}</h3>
    </div>
  );
};

export default Topbar;
