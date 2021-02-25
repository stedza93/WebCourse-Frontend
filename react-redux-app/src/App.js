import React, { Component } from 'react';
import Counter from './containers/Counter/Counter';
import './App.css';
import { FunctionalComp } from './containers/Counter/FunctionalComp';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <FunctionalComp></FunctionalComp>
      </div>
    );
  }
}

export default App;
