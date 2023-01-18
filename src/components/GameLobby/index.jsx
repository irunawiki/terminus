import React from 'react';
import usePlayer from '../../hook/usePlayer';
import useEnemy from '../../hook/useEnemy';
import useRoom from '../../hook/useRoom';

import './style.css';
import Button from '../Button';
import { WebSocketContext } from '../../core/native/connection';


export default function GameLobby() {
    const player = usePlayer();
    const enemy = useEnemy();
    const room = useRoom();

    const ws = React.useContext(WebSocketContext);

    const [readyButton, setReadyButton] = React.useState(false);


    const handleReady = () => {
        setReadyButton(true);
        ws.setPlayerReady();
    }

    return (
        <div className="game-lobby-waiting">
            <div>
                Game Code: {room.roomId}
            </div>
            <div className="game-lobby-waiting-player">
                <div>
                    {player.username}
                </div>
                {enemy ? 
                    <div className="title">{enemy.username}</div> 
                : 
                    <div className="title">
                        Waiting for player...
                    </div>
                }
            </div>
            {enemy ? <Button active={readyButton} onClick={handleReady}>Ready</Button> : null}
            
            
                    
        </div>
    )
}