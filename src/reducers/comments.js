const commentsReducerDefaultState = [];

export default (state = commentsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_COMMENTS':
      return [
        action.comment,
        ...state
      ]
    case 'REMOVE_COMMENTS':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_COMMENTS':
      return state.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            ...action.updates,
          };
        } else {
          return comment;
        };
      })
    case 'SET_COMMENTS':
      return action.comments
    default:
      return state
  }
}
