import React from 'react';
import Sobre from './objects/Sobre';
import Logo from './objects/Logo';
import Menu from './objects/Menu';
import './styles/components/styles.css';

function App() {
  return (
    <header className="App-header">
      <Logo />
      <Sobre />
      <Menu />
    </header>
  );
}

export default App;
