import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { startSetPosts } from './actions/posts'
import * as serviceWorker from './serviceWorker';
import './index.css';
import Home from './components/home';
import Feed from './components/feed';
import './bootstrap/dist/css/bootstrap.css'

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={ Home }/>
        <Route path='/posts' component={ Feed }/>
      </div>
    </Router>
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
