import React from 'react';
import X from '../../../img/X.svg';
import '../../Player/styles.css';

const PlayerX = () => (
  <button className="player-x">
    <img src={X} alt="Player X"/>
  </button>
);

export default PlayerX;