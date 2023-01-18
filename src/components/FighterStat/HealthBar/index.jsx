import React from 'react';
import Bar from '../../Bar';

export default function HealthBar({hp, progress}) {
    const [_hp, setHp] = React.useState(hp);
    const [_progress, setProgress] = React.useState(progress);

    React.useEffect(() => {
        setHp(hp);
        setProgress(progress)
    }, [hp, progress]);
    
    return (
        <Bar 
            label={_hp} 
            progress={_progress} 
            color="#b01414" 
            style={{width: "250px"}}
        />
    )
}