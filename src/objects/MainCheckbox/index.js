import React from "react";
import "./styles.css";

import MainLabel from "../MainLabel";
import MainInput from "../MainInput";

const MainCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <MainInput type="main-checkbox" id={id} value={value} content={content} />
    <MainLabel htmlFor={id} content={content} />
  </>
);

export default MainCheckbox;
