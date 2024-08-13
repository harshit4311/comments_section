import React, { useEffect } from 'react';
import CommentList from './components/CommentList';
import AddCommentForm from './components/AddCommentForm';
import useCommentStore from './store/store';
import './App.css';

const App = () => {
  const comments = useCommentStore((state) => state.comments);
  const deleteComment = useCommentStore((state) => state.deleteComment);
  const editComment = useCommentStore((state) => state.editComment);
  const deleteReply = useCommentStore((state) => state.deleteReply);
  const loadComments = useCommentStore((state) => state.loadComments);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return (
    <div className="App">
      <h1>Comments Section</h1>
      <AddCommentForm />
      {comments && comments.length > 0 ? (
        <CommentList
          comments={comments}
          onDelete={deleteComment}
          onEdit={editComment}
          onDeleteReply={deleteReply} // Pass the deleteReply function
        />
      ) : (
        <p>No comments yet. Be the first to add one!</p>
      )}
    </div>
  );
};

export default App;