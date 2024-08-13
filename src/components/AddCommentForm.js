import React, { useState } from 'react';
import useCommentStore from '../store/store';

const AddCommentForm = ({ parentId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const addComment = useCommentStore((state) => state.addComment);
  const addReply = useCommentStore((state) => state.addReply);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      const newComment = {
        id: Date.now(),
        name,
        text,
        date: new Date().toISOString(),
        replies: []
      };
      if (parentId) {
        const reply = {
          id: Date.now(),
          name,
          text,
          date: new Date().toISOString(),
        };
        addReply(parentId, reply);
      } else {
        addComment(newComment);
      }
      setName('');
      setText('');
    } else {
      alert('Please enter both name and comment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Your Comment"
      ></textarea>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddCommentForm;
