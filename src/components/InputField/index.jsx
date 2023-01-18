import React from 'react';
import './style.css';

export default function InputField({...props}) {
    return (
        <div className="input-field-root">
            <input {...props}/>
        </div>
    )
}