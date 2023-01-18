import React from 'react';
import './style.css';


function FighterSkillRow({value, fighter}) {
    const [skill, setSkill] = React.useState(value);

    React.useEffect(() => {
        setSkill(value);
    }, [value]);

    return (
        <div className="fighter-preview-skill-row">
            <div className="fighter-skill-level">
                Lv.{skill.level}
            </div>
            <div className="fighter-preview-skill-row-body">
                <div className="fighter-preview-skill-title">
                    {skill.name}
                </div>
                <div>
                    {fighter.name} {skill.description}
                </div>
            </div>
            <div className="fighter-preview-skill-energy">
                <div>
                    {skill.energy}
                </div>
                <div className="fighter-preview-skill-row-body-image">
                    <img src="https://v1.irunawiki.com/images/monsters/water_elemental.png" alt="d"/>
                </div>
            </div>
            
        </div>
    )
}

export default function PreviewBattleCard({value, mini}) {
    const [fighter, setFighter] = React.useState(value);

    React.useEffect(() => {
        setFighter(value);
    }, [value]);
    return (
        <div className={`preview-battle-card-root ${mini ? 'preview-battle-card-root-mini': ''}`}>
            <div className="preview-battle-card-header">
                <div>
                    {fighter.maxhp} HP
                </div>
                <div>
                    {fighter.name}
                </div>
            </div>
            <div className="preview-battle-card-image">
                <img alt="d" src={fighter.image}/>
            </div>
            <div className="preview-battle-card-body">
                <div className="preview-battle-card-skill-title">
                    Skills
                </div>
                <div className="preview-batle-card-detail">
                    {fighter.skills.map((skill, index) => 
                        <div key={index}>
                            <FighterSkillRow value={skill} fighter={fighter}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}