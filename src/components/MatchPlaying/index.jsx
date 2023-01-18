import React from 'react';
import GamePhaseHeader from '../GamePhaseHeader';
import GameFighterDisplay from '../GameFighterDisplay';
import usePlayer from '../../hook/usePlayer';
import SkillButton from '../SkillButton';
import './style.css';
import { WebSocketContext } from '../../core/native/connection';


export default function MatchPlaying() {
    const player = usePlayer();
    const ws = React.useContext(WebSocketContext);

    const executeSkill = (index) => {
        ws.useFighterSkill(index);
    }

    const render = () => {
        if(player.isAttacking) {
            return (
                <div style={{display: "flex"}}>
                    <div className="fighter-actions">
                        Attack
                    </div>
                    <div className="fighter-skill-container">
                    {player.activeFighter.skills.map((skill, index) => 
                        <div key={index} onClick={() => executeSkill(index)}>
                            <SkillButton value={skill}/>
                        </div>
                    )}
                    </div>
                </div>
            )
        } 
        return (
            <div>
                Defending
            </div>
        )
    }
    return (
        <div>
            <GamePhaseHeader/>
                
            <GameFighterDisplay/>
            {render()}
        </div>
    )
}