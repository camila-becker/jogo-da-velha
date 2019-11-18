import React from "react";
import "./styles.css";

const MainLabel = ({ htmlFor, content }) => (
  <label className="main-label" htmlFor={htmlFor}>
    {content}
  </label>
);

export default MainLabel;
