import React from "react";

const IconSocial = ({ action, src, alt }) => (
  <a target="_blank" href={action}>
    <img src={src} alt={alt} className="icon-social" />
  </a>
);

export default IconSocial;
