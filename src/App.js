import React, { useState } from "react";
import "./App.css";

import LayerDark from "./objects/LayerDark";
import InputCheckbox from "./objects/InputCheckbox";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [activeHistoryGame, setHistoryGame] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout("");

  const handleClick = () => {
    setHistoryGame(old => (old === "-active" ? "" : "-active"));
  };

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox
        onClick={handleClick}
        type="checkbox"
        id="show"
        value="show"
        content="Mostrar Eventos"
      />
      <HistoryGame className={activeHistoryGame} />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};

export default App;
