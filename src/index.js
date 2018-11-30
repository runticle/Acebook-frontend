import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetPosts } from './actions/posts'
import AppRouter from './routers/AppRouter'
import * as serviceWorker from './serviceWorker';
import './index.css';
// import App from './App';

import './bootstrap/dist/css/bootstrap.css'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetPosts()).then(() => {
  render(jsx, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
