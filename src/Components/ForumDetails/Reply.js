// src/Components/Forum/Reply.js

import React, { useState } from 'react';

const Reply = () => {
  const [reply, setReply] = useState('');

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reply:', reply);
    setReply('');
  };

  return (
    <div className="reply-container">
      <textarea
        value={reply}
        onChange={handleReplyChange}
        placeholder="Write your reply..."
        rows="5"
        className="reply-textarea"
      ></textarea>
      <button onClick={handleSubmit} className="submit-reply-btn">Reply</button>
    </div>
  );
};

export default Reply;
