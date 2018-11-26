import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Post from './components/post';

class App extends Component {
  render() {
    return (
      <div>
        < Navigation />
        <div className="container">
          <h1>
            < Post />
          </h1>
        </div>
      </div>
    );
  };
};

export default App;
