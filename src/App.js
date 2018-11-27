import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Feed from './components/feed';
import Welcome from './components/welcome';
import Login from './components/login';
import Register from './components/register';

class App extends Component {
  render() {
    document.body.style = "background-color: #e6e9ef;"
    return (
      <div>
        < Navigation />
        < Login />
        < Register />
        <h1 align="center">< Welcome /></h1>
        <div className="container">
            < Feed />
        </div>
      </div>
    );
  };
};

export default App;
