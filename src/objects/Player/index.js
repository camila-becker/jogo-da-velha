import React from 'react';
import './styles.css';
import playerX from '../../img/playerX.svg';
import playerO from '../../img/playerO.svg';

const Player = (props) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className="player">
      <img src={players[props.player]} alt={`Player ${props.player}`}/>
    </button>
  );
};

export default Player;