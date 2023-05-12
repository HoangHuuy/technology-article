import { Link, useParams } from "react-router-dom";
import "./Header.scss";
import imgURL from "constants/imgURL";
import { useState } from "react";

export default function MobileHeader() {
  const param = useParams();
  const [toggleOn, setToggleOn] = useState(false);

  const toggle = () => setToggleOn(!toggleOn);

  return (
    <header
      id="mobile-header"
      style={!!Object.keys(param).length ? { background: "#fff" } : {}}
    >
      <div className="nav-bar">
        <div className="logo">
          <Link to={"/"}>
            <img src={imgURL.smallLogo} alt="mobile logo" />
          </Link>
        </div>
        <div className="mobile-menu-toggle" onClick={toggle}>
          {toggleOn ? (
            <img src={imgURL.close} alt="close" />
          ) : (
            <img src={imgURL.bars} alt="bars" />
          )}
        </div>
      </div>
      {toggleOn && (
        <div
          className={`nav-menu ${
            !Object.keys(param).length ? "fixed-on-home-page" : ""
          }`}
        >
          <ul>
            <li>
              <Link to={"/category/technology"}>Technology</Link>
            </li>
            <li>
              <Link to={"/category/gadget"}>Gadget</Link>
            </li>
            <li>
              <Link to={"/category/software"}>Software</Link>
            </li>
            <li>
              <Link to={"/category/apps"}>Apps</Link>
            </li>
            <li>
              <Link to={"/category/games"}>Games</Link>
            </li>
            <li>
              <Link to={"/category/podcasts"}>Podcasts</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
