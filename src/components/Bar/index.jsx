import React from 'react';
import './style.css';

export default function Bar({label, progress, color, style}) {
    const [fill, setFill] = React.useState(0);
    const [_label, setLabel] = React.useState(progress);

    React.useEffect(() => {
        setFill(progress)
        setLabel(label)
    }, [progress, label])

    return (
        <div className="bar" style={style}>
            <div className="bar-label">
                {_label}
            </div>
            <div className="bar-progress" style={{width: `${fill}%`, background: color}}></div>
        </div>
    )
}