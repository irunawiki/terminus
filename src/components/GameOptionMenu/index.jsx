import React from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketContext } from '../../core/native/connection';
import { setPlayerState } from '../../reducers/player';
import { PLAYER_JOIN_ACTION_BUTTON } from '../../actions/player';
import Button from '../Button';


export default function GameOptionMenu() {
    const dispatch = useDispatch();
    const ws = React.useContext(WebSocketContext);

    const handleClickCreate = () => {
        ws.createRoom()
    }

    const handleClickJoin = () => {
        dispatch(setPlayerState(PLAYER_JOIN_ACTION_BUTTON));
    }

    return (
        <div className="game-option-menu">
            <Button onClick={handleClickCreate}>Create</Button>
            <Button onClick={handleClickJoin}>Join</Button>
        </div>
    )
}