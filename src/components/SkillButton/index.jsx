import React from 'react';
import './style.css';

export default function SkillButton({value}) {
    const [skill, setSkill] = React.useState(value);
    React.useEffect(() => {
        setSkill(value)
    }, []);

    return (
        <div className="skill-button-root">
            <div className="skill-button-container">
                <div className="skill-body">
                    <div className="skill-name">
                        {skill.name}
                    </div>
                    <div className="skill-description">
                        {skill.description}
                    </div>
                    
                </div>
                
            
            </div>
            <div className="skill-energy">
                {skill.energy}
            </div>
        </div>
        
    )
}