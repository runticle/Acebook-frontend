import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './index.css';
// import App from './App';

import './bootstrap/dist/css/bootstrap.css'
import actionCable from 'actioncable'

Const CableApp = {}

CableApp.cable = actionCable.createConsumer(`ws://${window.location.hostname}:3000/cable`)

render (
  <Router>
    <div>
      <Route exact path='/' component={ Home }/>
      <Route path='/posts' component={ Feed }/>
    </div>
  </Router>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
