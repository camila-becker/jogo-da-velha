import React from 'react';
import './styles.css';
import PlayerX from '../../objects/Player/X';
import PlayerO from '../../objects/Player/O';

const Board = () => (
  <div className="board">
    <PlayerX />
    <PlayerO />
  </div>
);

export default Board;