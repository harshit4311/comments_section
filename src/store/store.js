import create from 'zustand';

const useCommentStore = create((set) => ({
  comments: JSON.parse(localStorage.getItem('comments')) || [],
  
  addComment: (comment) => set((state) => {
    const updatedComments = [...state.comments, comment];
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    return { comments: updatedComments };
  }),

  deleteComment: (id) => set((state) => {
    const updatedComments = state.comments.filter(c => c.id !== id);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    return { comments: updatedComments };
  }),

  editComment: (id, text) => set((state) => {
    const updatedComments = state.comments.map(c => c.id === id ? { ...c, text } : c);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    return { comments: updatedComments };
  }),

  addReply: (commentId, reply) => set((state) => {
    const updatedComments = state.comments.map(c =>
      c.id === commentId
        ? { ...c, replies: [...(c.replies || []), reply] }
        : c
    );
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    return { comments: updatedComments };
  }),

  deleteReply: (commentId, replyId) => set((state) => {
    const updatedComments = state.comments.map(c =>
      c.id === commentId
        ? { ...c, replies: (c.replies || []).filter(r => r.id !== replyId) }
        : c
    );
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    return { comments: updatedComments };
  }),

  loadComments: () => set(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    return { comments: savedComments };
  }),
}));

export default useCommentStore;
