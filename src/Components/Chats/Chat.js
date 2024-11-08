// src/Components/Chats/Chat.js

import React from 'react';

const Chat = () => {
    return (
        <div className="chat-content">
            <div className="message received">Hello! How can I help you today?</div>
            <div className="message sent">I'm looking for information about the course offerings.</div>
            {/* Add more messages as needed */}
        </div>
    );
};

export default Chat;
