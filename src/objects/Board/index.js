import React from 'react';
import './styles.css';


const Board = ({children}) => (
  <div className="board">
    {children}
  </div>
);

export default Board;