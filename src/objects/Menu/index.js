import React, { Component } from "react";
import "./styles.css";

class Menu extends Component {
  handleClick = () => {
    console.log("Botão clicado");
  };

  render() {
    return (
      <a href="#menu" className="menu" onClick={this.handleClick}>
        <span className="center">Menu</span>
      </a>
    );
  }
}

export default Menu;
