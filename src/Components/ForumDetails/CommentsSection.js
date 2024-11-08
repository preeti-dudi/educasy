// src/Components/Forum/CommentsSection.js

import React from 'react';
import Reply from './Reply';

const CommentsSection = ({ comments }) => {
  return (
    <div className="comments-section">
      <h2>Comments</h2>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment, index) => (
            <li key={index} className="comment">
              <p className="comment-user">{comment.user}</p>
              <p className="comment-text">{comment.comment}</p>
              {/* Reply Section */}
              <div className="forum-reply-section">
                <Reply />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentsSection;
