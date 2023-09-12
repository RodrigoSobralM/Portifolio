import React from "react";
import iconHeader from "../../assets/iconHeader.png";
import './index.scss'
const Header = () => {
  return (
    <div className="geralHeader">
      <div className="geralHeader__navImg">
        <img src={iconHeader} alt="" />
        <p>Meu Portifólio</p>
      </div>
      <div className="geralHeader__list">
        <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
