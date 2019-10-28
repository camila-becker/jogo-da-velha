import React from "react";

const Input = ({ type = "text", id = "", value = "" }) => (
  <input className="input" type={type} value={value} id={id} />
);

export default Input;
