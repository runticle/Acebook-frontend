import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import Navigation from './components/navigation';
import Feed from './components/feed';
import './bootstrap/dist/css/bootstrap.css'

render (
  <Router>
    <div>
      <Route exact path='/' component={ Navigation }/>
      <Route path='/posts' component={ Feed }/>
    </div>
  </Router>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
