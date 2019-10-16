import React from 'react';
import './styles.css';
import playerX from '../../img/playerX.svg';
import playerO from '../../img/playerO.svg';

const Player = ({player}) => {
  const players = [];
  players['x'] = playerX;
  players['o'] = playerO;

  return (
    <button className="player">
      <img src={players[player]} alt={`Player ${player}`}/>
    </button>
  );
};

export default Player;