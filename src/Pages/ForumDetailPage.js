// src/Pages/ForumDetailPage.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ForumPostDetails from '../Components/ForumDetails/ForumPostDetails';
import CommentsSection from '../Components/ForumDetails/CommentsSection';
import AddComment from '../Components/ForumDetails/AddComment';
import '../Styles/ForumDetailStyles.css';

const ForumDetailPage = () => {
  const { forumId } = useParams();
  const [forumPost, setForumPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetching forum post and comments from API (mock data for now)
    const fetchForumData = async () => {
      const postData = {
        id: forumId,
        title: 'How to get started with React',
        body: 'React is a powerful JavaScript library for building user interfaces. In this post, I will cover how you can get started with React and some key concepts.',
        author: 'John Doe',
        date: '2024-11-07',
        upvotes: 10,
        downvotes: 2,
      };

      const postComments = [
        { user: 'Jane Smith', comment: 'Great post! Very helpful for beginners.' },
        { user: 'Mike Johnson', comment: 'I’ve been using React for a while, and this guide is solid!' },
      ];

      setForumPost(postData);
      setComments(postComments);
    };

    fetchForumData();
  }, [forumId]);

  const handleAddComment = () => {
    if (newComment) {
      setComments([...comments, { user: 'New User', comment: newComment }]);
      setNewComment('');
    }
  };

  if (!forumPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forum-detail-page">
      <h2 className="forum-post-title">{forumPost.title}</h2>

      {/* Forum Post Details */}
      <ForumPostDetails forumPost={forumPost} />

      {/* Comments Section */}
      <CommentsSection comments={comments} />

      {/* Add New Comment */}
      <AddComment newComment={newComment} setNewComment={setNewComment} handleAddComment={handleAddComment} />
    </div>
  );
};

export default ForumDetailPage;
