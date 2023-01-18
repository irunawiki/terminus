import React from 'react';
import usePlayer from '../../hook/usePlayer';
import PreviewBattleCard from '../PreviewBattleCard';
import './style.css';
import { WebSocketContext } from '../../core/native/connection';
import Button from '../Button';
import GameFighterDisplay from '../GameFighterDisplay';
import GamePhaseHeader from '../GamePhaseHeader';
import { useSelector } from 'react-redux';
import { PLAYER_PICK_SUPPORT, PLAYER_PICK_FIGHTER, PLAYER_MATCH_READY } from '../../actions/player';
import PreviewSupportCard from '../PreviewSupportCard';


export default function PickPhase() {
    const player = usePlayer();
    const ws = React.useContext(WebSocketContext);
    const [activeFighterIndex, setActiveFighterIndex] = React.useState(null);
    const playerState = useSelector((state) => state.player.playerState);

    const pickFighter = (index) => {
        setActiveFighterIndex(index);
        ws.setActiveFighter(index);
    }

    const lockFighter = () => {
        if (activeFighterIndex !== null) {
            ws.lockFighter()
            return
        }
        return
    }

    const pickSupport = (index) => {
        ws.pickSupport(index)
    }

    const setMatchReady = () => {
        ws.setPlayerMatchReady()
    }

    const render = () => {
        switch(playerState) {
            case PLAYER_PICK_SUPPORT:
                return (
                    <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
                        <Button style={{width: 200, height: 50, fontSize: "1rem"}} onClick={setMatchReady} active>Play</Button>
                        <div className="deck-scroll">
                            pick your support card (up to 3)
                            <div style={{display: "flex"}}>
                                {player.supports.map((support, index) => 
                                    <div className="deck-row-item" key={index} onClick={() => pickSupport(index)}>
                                        <PreviewSupportCard mini value={support}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )
            case PLAYER_PICK_FIGHTER:
                return (
                    <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
                        {activeFighterIndex !== null ? 
                            <Button style={{width: 200, height: 50, fontSize: "1rem"}} onClick={lockFighter} active>Lock</Button>
                        : null}
                        
                        <div className="deck-row">
                            {player.fighters.map((fighter, index) => 
                                <div className="deck-row-item" key={index} onClick={() => pickFighter(index)}>
                                    <PreviewBattleCard value={fighter} mini/>
                                </div>
                            )}
                        </div>
                    </div>
                )
            case PLAYER_MATCH_READY:
                return (
                    <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
                        Waiting for opponent...
                    </div>
                )
            default:
                return null;
        }
    }
    return (
        <div>
            <GamePhaseHeader/>
            
            <GameFighterDisplay/>
            
            {render()}
            
        </div>
    )
}