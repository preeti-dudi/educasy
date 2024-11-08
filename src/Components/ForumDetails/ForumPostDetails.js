// src/Components/Forum/ForumPostDetails.js

import React from 'react';

const ForumPostDetails = ({ forumPost }) => {
  return (
    <div className="forum-post-details">
      <p className="forum-post-author">
        Posted by {forumPost.author} on {forumPost.date}
      </p>
      <p className="forum-post-body">{forumPost.body}</p>

      <div className="forum-post-votes">
        <button className="upvote-button">Upvote ({forumPost.upvotes})</button>
        <button className="downvote-button">Downvote ({forumPost.downvotes})</button>
      </div>
    </div>
  );
};

export default ForumPostDetails;
