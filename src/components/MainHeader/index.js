import React from "react";
import "./styles.css";

import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/AboutLink";
import MainMenu from "../../objects/MainMenu";

const MainHeader = ({ onClick }) => (
  <header className="main-header">
    <LogoCollab />
    <AboutLink onClick={onClick} />
    <MainMenu onClick={onClick} />
  </header>
);

export default MainHeader;
