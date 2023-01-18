import React from 'react';
import Bar from '../../Bar';

export default function EnergyBar({mp, progress}) {
    const [_mp, setMp] = React.useState(mp);
    const [_progress, setProgress] = React.useState(progress);

    React.useEffect(() => {
        setMp(mp);
        setProgress(progress)
    }, [mp, progress]);
    
    return (
        <Bar 
            label={_mp} 
            progress={_progress} 
            color="blue" 
            style={{width: "250px"}}
        />
    )
}