import React, { Component } from 'react';

import './App.css';
import Navigation from './components/navigation';
import Feed from './components/feed';
import Welcome from './components/welcome';
import Login from './components/login';
import Register from './components/register';
import NewPost from './components/newPost';
import NewComment from './components/newComment';

class App extends Component {
  render() {
    document.body.style = "background-color: #e6e9ef;"
    return (
      <div>
        < Navigation />
        < Login />
        < Register />
        < NewPost />
        < NewComment />
        <h1 align="center">< Welcome /></h1>
        <div className="container">
            < Feed />
        </div>
      </div>
    );
  };
};

export default App;
