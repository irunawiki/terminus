import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export default function GameMessage() {
    const messagesEndRef = React.useRef(null)
    const messages = useSelector((state) => state.room.messages);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    React.useEffect(() => {
        scrollToBottom()
    }, [messages]);
    return (
        <div className="game-message-container">
            <div className="game-message-container-inner">
                {messages.slice(-50).map((message, index) => 
                    <div key={index} className="message-row">
                        {message}  
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            
        </div>
    )
}