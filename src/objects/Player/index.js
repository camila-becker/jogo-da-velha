import React from 'react';
import './styles.css';
import playerX from '../../img/playerX.svg';

const Player = () => (
  <button className="player">
    <img src={playerX} alt="Player X"/>
  </button>
);

export default Player;