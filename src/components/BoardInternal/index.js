import React from "react";
import "./styles.css";
import GameBoard from "../../objects/GameBoard";
import GamePlayer from "../../objects/GamePlayer";

const BoardInternal = () => (
  <GameBoard>
    <ul className="board-internal">
      <li className="item">
        <GamePlayer player="x" />
      </li>
      <li className="item">
        <GamePlayer player="o" />
      </li>
      <li className="item">
        <GamePlayer player="x" />
      </li>

      <li className="item">
        <GamePlayer player="o" />
      </li>
      <li className="item">
        <GamePlayer player="x" />
      </li>
      <li className="item">
        <GamePlayer player="o" />
      </li>

      <li className="item">
        <GamePlayer player="x" />
      </li>
      <li className="item">
        <GamePlayer player="o" />
      </li>
      <li className="item">
        <GamePlayer player="x" />
      </li>
    </ul>
  </GameBoard>
);

export default BoardInternal;
