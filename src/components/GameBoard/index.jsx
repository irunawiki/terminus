import React from 'react';
import './style.css';
import GameBoardNotification from '../GameBoardNotification';

export default function GameBoard({children}) {
    return (
        <div className="game-board">
            <div className="game-board-overlay">
                <GameBoardNotification/>
                {children}
                
            </div>
            
        </div>
    )
}