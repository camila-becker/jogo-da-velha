import React from "react";
import "./styles.css";

const LayerDark = ({ children, className = "" }) => (
  <section className={`layer-dark ${className}`}>{children}</section>
);

export default LayerDark;
