import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <div>
        < Navigation />
        <div className="container">
          <h1>
            This is all the ting!
          </h1>
        </div>
      </div>
    );
  };
};

export default App;
