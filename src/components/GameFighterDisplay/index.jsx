import React from 'react';
import './style.css';
import usePlayer from '../../hook/usePlayer';
import useEnemy from '../../hook/useEnemy';
import FighterStat from '../FighterStat';

function FighterDisplay({value}) {
    const [fighter, setFighter] = React.useState(value);

    React.useEffect(() => {
        setFighter(value);
    }, [value]);

    return (
        <div className="fighter-preview">
            <img src={fighter.image} width="100" height="100" alt="hero_image" />
            {fighter.name}
        </div>
    )
}

export default function GameFighterDisplay() {
    const player = usePlayer();
    const enemy = useEnemy();

    return (
        <div className="fighter-preview-body">
            <div className="fighter-preview-body-item">
                {player.activeFighter ? 
                    <React.Fragment>
                        <FighterDisplay value={player.activeFighter}/>
                        <FighterStat value={player.activeFighter}/>
                    </React.Fragment>
                      
                : 'Waiting...'}
            </div>
            <div>
                {enemy.activeFighter ? 
                    <React.Fragment>
                        <FighterDisplay value={enemy.activeFighter}/>
                        <FighterStat value={enemy.activeFighter}/>
                    </React.Fragment>
                    
                : 'Waiting...'}
            </div>
        </div>
    )
}