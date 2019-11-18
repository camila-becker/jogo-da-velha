import React from "react";

const MainInput = ({ type = "text", id = "", value = "" }) => (
  <input className="main-input" type={type} value={value} id={id} />
);

export default MainInput;
