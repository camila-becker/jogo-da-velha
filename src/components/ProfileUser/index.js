import React from "react";
import "./styles.css";
import Avatar from "../../img/avatar.png";
import GitHub from "../../img/github.svg";
import Linkedin from "../../img/linkedin.svg";
import Facebook from "../../img/facebook.svg";
import Twitter from "../../img/twitter.svg";
import Instagram from "../../img/instagram.svg";

import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Avatar} alt="Avatar da Camila Becker" />
    </dd>
    <dt className="title">Camila Becker</dt>
    <dd className="description">
      Tentando sair da área de Logística e me tornar Desenvolvedora FrontEnd.
    </dd>
    <dd className="socials">
      <IconSocial
        action="https://github.com/camila-becker"
        src={GitHub}
        alt="Logo da GitHub"
      />
      <IconSocial
        action="https://www.linkedin.com/in/camila-becker-84797610a/"
        src={Linkedin}
        alt="Logo do Linked In"
      />
      <IconSocial
        action="https://www.facebook.com/camila.becker.37"
        src={Facebook}
        alt="Logo do Facebook"
      />
      <IconSocial
        action="https://twitter.com/Camila_SBecker"
        src={Twitter}
        alt="Logo do Twitter"
      />
      <IconSocial
        action="https://www.instagram.com/"
        src={Instagram}
        alt="Logo do Instagram"
      />
    </dd>
  </dl>
);

export default ProfileUser;
