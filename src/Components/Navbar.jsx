import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navleft">
        <div classname="navtitle">
          <p>Overview</p>
        </div>
      </div>

      <div className="navright">
        <div className="navsearch">
          <FontAwesomeIcon
            className="icon"
            icon="fa-solid fa-magnifying-glass "
          />
        </div>
        <div className="navnotification">
          <FontAwesomeIcon className="icon" icon="fa-solid fa-bell " />
        </div>
        <div className="vertical"></div>
        <div className="navusername">
          <p>Ashok</p>
        </div>
        <div className="navusericon">
          <FontAwesomeIcon className="icon" icon="fa-solid fa-circle-user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
