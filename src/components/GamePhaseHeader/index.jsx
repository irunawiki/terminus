import React from 'react';
import './style.css';
import usePlayer from '../../hook/usePlayer';
import useEnemy from '../../hook/useEnemy';
import GameMessage from '../GameMessage';

export default function GamePhaseHeader() {
    const player = usePlayer();
    const enemy = useEnemy();
    return (
        <div className="game-phase-header">
            <div className="pick-phase-header-fighter-stat">
                {player.username}
                
            </div>
            <GameMessage/>
            <div className="pick-phase-header-fighter-stat">
                {enemy.username}
                
            </div>
        </div>
    )
}