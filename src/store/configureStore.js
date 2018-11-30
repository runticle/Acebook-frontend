import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import postsReducer from '../reducers/posts';
import commentsReducer from '../reducers/comments';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      posts: postsReducer,
      comments:commentsReducer
      // filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
