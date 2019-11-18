import React from "react";
import "./styles.css";

const AboutSection = ({ children, className = "" }) => (
  <section className={`about-section ${className}`}>{children}</section>
);

export default AboutSection;
