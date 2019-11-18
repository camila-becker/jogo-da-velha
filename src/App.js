import React, { useState } from "react";
import "./App.css";

import AboutSection from "./objects/AboutSection";
import MainCheckbox from "./objects/MainCheckbox";
import MainHeader from "./components/MainHeader";
import BoardInternal from "./components/BoardInternal";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");

  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <MainHeader onClick={handleClickAdd} />
      <BoardInternal />
      <MainCheckbox
        type="checkbox"
        id="show"
        value="show"
        content="Mostrar Eventos"
      />
      <AboutSection className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove} />
        <ProfileUser />
      </AboutSection>
    </main>
  );
};

export default App;
