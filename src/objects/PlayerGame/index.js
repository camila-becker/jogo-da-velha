import React from "react";
import "./styles.css";
import playerX from "../../img/playerX.svg";
import playerO from "../../img/playerO.svg";

const handleClick = () => {
  console.log("clicou no player");
};

const PlayerGame = ({ player = false }) => {
  const players = [];
  players["x"] = playerX;
  players["o"] = playerO;

  return (
    <button onClick={handleClick} className="player-game">
      {player && <img src={players[player]} alt={`Player ${player}`} />}
    </button>
  );
};

export default PlayerGame;
