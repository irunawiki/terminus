import React from 'react';
import usePlayer from '../../hook/usePlayer';
import PreviewBattleCard from '../PreviewBattleCard';
import './style.css';
import Button from '../Button';
import PreviewSupportCard from '../PreviewSupportCard';
import { WebSocketContext } from '../../core/native/connection';

export default function DeckPrepare() {
    const player = usePlayer();

    const [deckView, setDeckView] = React.useState(true);
    const ws = React.useContext(WebSocketContext);

    const toggleDeckView = () => {
        setDeckView(!deckView);
    }

    const handleGameStart = () => {
        ws.setPlayerDeckReady()
    }

    return (
        <div>
            {deckView ? 
            <div>
                <div className="deck-row">
                    {player.fighters.map((fighter, index) => 
                        <div className="deck-row-item" key={index}>
                            <PreviewBattleCard value={fighter}/>
                        </div>
                        
                    )}
                </div>
                <div className="deck-switch-button-root">
                    <Button style={{width: 200, height: 50, fontSize: "1rem"}} active onClick={toggleDeckView}>Supports</Button>
                </div>
            </div>
            : 
            <div>
                <div className="deck-scroll">
                    <div style={{display: "flex"}}>
                        {player.supports.map((support, index) => 
                            <div key={index}>
                                <PreviewSupportCard value={support}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="deck-switch-button-root">
                    <Button style={{width: 200, height: 50, fontSize: "1rem"}} onClick={toggleDeckView} active>Battler</Button>
                </div>
            </div>
            }
            <br/>
            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                <Button onClick={handleGameStart}>I'm Ready</Button>
            </div>
            
            
        </div>
    )
}