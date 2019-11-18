import React, { useState } from "react";
import "./styles.css";
import playerX from "../../img/playerX.svg";
import playerO from "../../img/playerO.svg";

const PlayerGame = ({ player = false }) => {
  const [statePlayer, setStatePlayer] = useState(player);
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  const handleClick = () => {
    setStatePlayer("x");
  };

  return (
    <button onClick={handleClick} className="player-game">
      {statePlayer && (
        <img
          src={players[statePlayer]}
          alt={`Jogador ${statePlayer.toUpperCase()}`}
        />
      )}
    </button>
  );
};

export default PlayerGame;
