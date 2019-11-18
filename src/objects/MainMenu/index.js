import React from "react";
import "./styles.css";

const MainMenu = ({ onClick }) => (
  <a href="#menu" className="main-menu" onClick={onClick}>
    <span className="center">Menu</span>
  </a>
);

export default MainMenu;
