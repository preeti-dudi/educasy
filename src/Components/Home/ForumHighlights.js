import React from 'react';

const ForumHighlights = ({ forumPosts }) => {
  return (
    <section className="forum-highlights">
      <h2>Forum Highlights</h2>
      <div className="forum-posts">
        {forumPosts.map((post, index) => (
          <div key={index} className="forum-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/forum/${post.id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForumHighlights;
