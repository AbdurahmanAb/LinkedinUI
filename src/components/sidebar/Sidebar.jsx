import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./assets/background.jpg" alt="loo" className="sidebar__bcg" />
        <figure className="figure">
          <img
            src="./assets/person/1.jpeg"
            alt=""
            className="sidebar__avatar"
          />
          <figcaption className="sidebar__caption"></figcaption>
        </figure>
        <h4 className="user__name">Sonny Sangha</h4>
        <p className="gmail">SonnySangha@gmail.com</p>
        <hr className="hr" />
        <p className="view">
          Who Viewed Your<span>13,456</span>
        </p>
        <p className="view">
          Views On Post<span>3,456</span>
        </p>
      </div>
      <div className="sidebar__middle">
        <h3 className="recent">Recent</h3>
        <ul className="hashtags">
          <li className="hashtags__list"># Programming</li>
          <li className="hashtags__list">#Agile</li>
          <li className="hashtags__list">#java</li>
          <li className="hashtags__list">#Laravel</li>
          <li className="hashtags__list">#Django</li>
          <li className="hashtags__list">#NestJs</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
