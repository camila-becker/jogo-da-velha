import React from "react";
import logoCollab from "../../img/logo.svg";
import logoCollabLight from "../../img/logo-light.svg";

const LogoCollab = ({ light = false }) => (
  <img
    src={light ? logoCollabLight : logoCollab}
    alt="Logo CollabCode"
    className="logo-collab"
  />
);

export default LogoCollab;
