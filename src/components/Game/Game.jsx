import React from 'react';
import { useSelector } from 'react-redux';

import GameBoard from '../GameBoard';

import { WebSocketContext } from '../../core/native/connection';

import { 
    PLAYER_WAITING, 
    PLAYER_CONNECT, 
    PLAYER_JOIN_ACTION_BUTTON, 
    PLAYER_DECK_PREPARE, 
    PLAYER_PICK_FIGHTER, 
    PLAYER_PICK_SUPPORT, 
    PLAYER_MATCH_READY, 
    PLAYER_PLAYING
} from '../../actions/player';

import InputField from '../InputField';
import './style.css';
import GameOptionMenu from '../GameOptionMenu';
import GameLobby from '../GameLobby';
import DeckPrepare from '../DeckPrepare';
import PickPhase from '../PickPhase';
import MatchPlaying from '../MatchPlaying';



export default function Game() {
    const playerState = useSelector((state) => state.player.playerState);
    const [roomCode, setRoomCode] = React.useState("");
    const ws = React.useContext(WebSocketContext);

    const submitRoomCode = (e) => {
        if (e.key === 'Enter') {
            ws.joinRoom(roomCode)
        }
    }

    const render = () => {
        switch(playerState) {
            case PLAYER_CONNECT:
                return (
                    <GameOptionMenu/>
                )
            
            case PLAYER_WAITING:
                return (
                    <GameLobby/>
                )
            
            case PLAYER_JOIN_ACTION_BUTTON:
                return (
                    <div className="game-option-menu">
                        <div style={{fontSize: "1.7rem"}}>
                            Room Code
                        </div>
                        <br/>
                        <InputField value={roomCode} onChange={(v) => setRoomCode(v.target.value)} onKeyDown={submitRoomCode}/>
                    </div>
                )
            case PLAYER_DECK_PREPARE:
                return (
                    <DeckPrepare/>
                )
            case PLAYER_MATCH_READY:
            case PLAYER_PICK_SUPPORT:
            case PLAYER_PICK_FIGHTER:
                return (
                    <PickPhase/>
                )
            case PLAYER_PLAYING:
                return (
                    <MatchPlaying/>
                )
            default:
                return null;
        }

    }
    return (
        <GameBoard>
            {render()}
        </GameBoard>
    )
}