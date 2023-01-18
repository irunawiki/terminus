import React from 'react';
import './style.css';
import HealthBar from './HealthBar';
import EnergyBar from './EnergyBar';

export default function FighterStat({value}) {
    const [fighter, setFighter] = React.useState(value);

    React.useEffect(() => {
        setFighter(value);
    }, [value]);
    return (
        <div className="fighter-stat-root">
            <HealthBar 
                hp={`${fighter.hp}/${fighter.maxhp}`} 
                progress={fighter.hp / fighter.maxhp * 100}/>
            <EnergyBar mp={`${fighter.energy}/${fighter.maxEnergy}`}
                progress={fighter.energy / fighter.maxEnergy * 100}/>
            
        </div>
    )
}