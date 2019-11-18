import React from "react";
import "./styles.css";

import LabelGame from "../LabelGame";
import InputGame from "../InputGame";

const handleClick = () => {
  console.log("clicado");
};

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame type="checkbox" id={id} value={value} content={content} />
    <LabelGame onClick={handleClick} htmlFor={id} content={content} />
  </>
);

export default InputCheckbox;
