import React from 'react';
import Circle from '../../../img/Circle.svg'
import '../../Player/styles.css';

const PlayerO = () => (
  <button className="player-o">
    <img src={Circle} alt="Player O"/>
  </button>
);

export default PlayerO;