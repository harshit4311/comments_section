import React, { useState } from 'react';
import AddCommentForm from './AddCommentForm';

const Comment = ({ comment, onDelete, onEdit, onDeleteReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const [showReplies, setShowReplies] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(comment.id, editedText);
    setIsEditing(false);
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="comment">
      <h4>{comment.name} on {new Date(comment.date).toLocaleString()}</h4>
      {isEditing ? (
        <div>
          <textarea value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <p>{comment.text}</p>
      )}
      <button onClick={() => onDelete(comment.id)}>Delete</button>
      {!isEditing && <button onClick={handleEdit}>Edit</button>}
      <button onClick={toggleReplies}>
        {showReplies ? 'Hide Replies' : 'Show Replies'}
      </button>
      {showReplies && (
        <div>
          {comment.replies && comment.replies.map((reply) => (
            <div key={reply.id} className="reply">
              <h5>{reply.name} on {new Date(reply.date).toLocaleString()}</h5>
              <p>{reply.text}</p>
              <button onClick={() => onDeleteReply(comment.id, reply.id)}>Delete Reply</button>
            </div>
          ))}
          <AddCommentForm parentId={comment.id} />
        </div>
      )}
    </div>
  );
};

export default Comment;
