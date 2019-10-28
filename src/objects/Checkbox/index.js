import React from "react";
import "./styles.css";

import Label from "../Label";
import Input from "../Input";

const Checkbox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input type="checkbox" id={id} value={value} content={content} />
    <Label htmlFor={id} content={content} />
  </>
);

export default Checkbox;
