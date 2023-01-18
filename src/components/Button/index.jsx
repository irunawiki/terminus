import React from 'react';
import './style.css';


export default function Button({children, active, ...props}) {
    return (
        <div className={`button ${active ? 'button-active': null}`} {...props}>
            {children}
        </div>
    )
}