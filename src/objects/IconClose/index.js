import React from "react";
import "./styles.css";

const IconClose = ({ onClick }) => (
  <a className="icon-close" href="#sobre" onClick={onClick}>
    <span className="content">Fechar</span>
  </a>
);

export default IconClose;
