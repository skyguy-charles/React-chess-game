import React, { useState } from 'react';
import GameBoard from './GameBoard'; 
import { getNextTurn, isValidTurn } from '../logic/turnManager';
import './ChessBoard.css';

function ChessGame() {
  const [currentTurn, setCurrentTurn] = useState('white');

  const handleMove = (fromSquare, toSquare, pieceColor) => {
    
    if (!isValidTurn(currentTurn, pieceColor)) {
      console.log("Not your turn!");
      return false;
    }

    
    console.log(`${pieceColor} moves from ${fromSquare} to ${toSquare}`);
    setCurrentTurn(getNextTurn(currentTurn));
    return true;
  };

  return (
    <div>
      <GameBoard  onMove={handleMove} currentTurn={currentTurn}/>
    </div>
  );
}

export default ChessGame;