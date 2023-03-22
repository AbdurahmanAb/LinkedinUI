import "./header.scss";
import { IoIosSearch, IoMdHome, IoMdPeople } from "react-icons/io";
import { BsFillBagCheckFill, MdMessage, AiTwotoneBell } from "react-icons/all";
import Topbar from "../Topbar/Topbar";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1024px-Linkedin_icon.svg.png"
          alt=""
          className="header__logo"
        />
        <div className="header__search">
          <i>
            <IoIosSearch />
          </i>
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <Topbar title="home" Icon={IoMdHome} />
        <Topbar title="MyNetwork" Icon={IoMdPeople} />
        <Topbar title="Jobs" Icon={BsFillBagCheckFill} />
        <Topbar title="Messaging" Icon={MdMessage} />
        <Topbar title="Notifications" Icon={AiTwotoneBell} />
        <Topbar
          title="He"
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq9ofKba0PNkbbDDbeU7PQL12jOxoAags8Hg&usqp=CAU"
        />
      </div>
    </header>
  );
};

export default Header;
