import React from "react";

const InputGame = ({ type = "text", id = "", value = "" }) => (
  <input className="input-game" type={type} value={value} id={id} />
);

export default InputGame;
