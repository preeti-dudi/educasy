// src/Pages/ChatPage.js

import React from 'react';
import Attachment from '../Components/Chats/Attachment';
import Chat from '../Components/Chats/Chat';
import Inbox from '../Components/Chats/Inbox';
import Notification from '../Components/Chats/Notification';
import SearchBar from '../Components/Chats/SearchBar';
import '../Styles/ChatStyles.css';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <header className="chat-header">
        <SearchBar />
        <Notification />
      </header>

      <div className="chat-body">
        <aside className="chat-inbox">
          <Inbox />
        </aside>

        <main className="chat-main">
          <Chat />
        </main>

        <footer className="chat-footer">
          <Attachment />
        </footer>
      </div>
    </div>
  );
};

export default ChatPage;
