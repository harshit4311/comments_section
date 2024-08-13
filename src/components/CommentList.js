import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, onDelete, onEdit, onDeleteReply }) => {
  return (
    <div className="comment-list">
      {comments
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDelete={onDelete}
            onEdit={onEdit}
            onDeleteReply={onDeleteReply} // Pass it down as a prop
          />
        ))}
    </div>
  );
};

export default CommentList;
