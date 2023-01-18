import React from 'react';
import { useDispatch } from 'react-redux';
import useWebSocket from 'react-use-websocket';
import { updatePlayer } from '../../reducers/player';
import { updateRoom, updateMessage } from '../../reducers/room';

const WebSocketContext = React.createContext(null);
const WS_URL = "ws://localhost:5000"

export { WebSocketContext }

export default ({ children }) => {
    let ws;
    
    const dispatch = useDispatch();


    const { sendJsonMessage } = useWebSocket(WS_URL, {
        onOpen: () => {},
        onMessage: (event) => {
            const data = JSON.parse(event.data)
            switch(data.type) {
                case "room:status":
                    dispatch(updateRoom(data.params.roomData));
                    break;
                case "room:message":
                    dispatch(updateMessage(data.params));
                    break;
                case "room:create_success":
                    joinRoom(data.params.roomId);
                    break;
                case "room:state":
                    dispatch(updateRoom(data.params))
                    break;
                case "room:join":
                    dispatch(updatePlayer(data.params.playerData));
                    dispatch(updateRoom(data.params.roomData));
                    break;
                case "player:update":
                    dispatch(updatePlayer(data.params.playerData));
                    break;
            }
        }
    });

    const createRoom = () => {
        const obj =  {
            "type": "room:create",
            "params": {}
        }
        sendJsonMessage(obj)
    }

    const joinRoom = (roomId) => {
        const obj =  {
            "type": "room:join",
            "params": {"roomId": roomId}
        }
        sendJsonMessage(obj)
    }

    const setPlayerReady = () => {
        const obj = {
            "type": "player:ready",
            "params": {},
        }
        sendJsonMessage(obj)
    }

    const setPlayerDeckReady = () => {
        const obj = {
            "type": "player:deck-ready",
            "params": {}
        }
        sendJsonMessage(obj)
    }

    const setActiveFighter = (index) => {
        const obj = {
            "type": "player:pick-fighter",
            "params": {fighter: index}
        }
        sendJsonMessage(obj);
    }

    const pickSupport = (index) => {
        const obj = {
            "type": "player:pick-support",
            "params": {support: index}
        }

        sendJsonMessage(obj);
    }

    const setPlayerMatchReady = () => {
        const obj = {
            "type": "player:match-ready",
            "params": {}
        }

        sendJsonMessage(obj);
    }

    const lockFighter = () => {
        const obj = {
            "type": "player:lock-fighter",
            "params": {}
        }
        sendJsonMessage(obj);
    }

    const useFighterSkill = (skillIndex) => {
        const obj = {
            "type": "player:use-skill",
            "params": {skill: skillIndex}
        }
        sendJsonMessage(obj);
    }

    ws = {
        joinRoom,
        createRoom,
        sendJsonMessage,
        setPlayerReady,
        setPlayerDeckReady,
        setActiveFighter,
        lockFighter,
        pickSupport,
        setPlayerMatchReady,
        useFighterSkill
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )

}