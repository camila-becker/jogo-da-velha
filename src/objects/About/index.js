import React from "react";
import "./styles.css";

const About = ({ children, className = "" }) => (
  <section className={`about ${className}`}>{children}</section>
);

export default About;
