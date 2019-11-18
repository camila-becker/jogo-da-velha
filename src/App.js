import React, { useState } from "react";
import "./App.css";

import LayerDark from "./objects/LayerDark";
import InputCheckbox from "./objects/InputCheckbox";
import TagGame from "./objects/TagGame";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox
        type="checkbox"
        id="show"
        value="show"
        content="Mostrar Eventos"
      />
      <TagGame content="Adicionou O" />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
