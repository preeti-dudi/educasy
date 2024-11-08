// src/Components/Forum/AddComment.js

import React from 'react';

const AddComment = ({ newComment, setNewComment, handleAddComment }) => {
  return (
    <div className="add-comment">
      <textarea
        className="comment-textarea"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write a comment..."
      />
      <button className="add-comment-button" onClick={handleAddComment}>
        Add Comment
      </button>
    </div>
  );
};

export default AddComment;
