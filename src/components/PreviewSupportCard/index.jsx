import React from 'react';
import './style.css';

export default function PreviewSupportCard({value}) {
    const [support, setSupport] = React.useState(value);

    React.useEffect(() => {
        setSupport(value);
    }, [value]);
    return (
        <div className="preview-battle-card-root preview-support-card-root">
            <div className="preview-support-card-container">
                <div className="preview-support-card-name">
                    {support.name}
                </div>
                <div className="preview-support-card-description">
                    {support.description}
                </div>
            </div>
        </div>
    )
}