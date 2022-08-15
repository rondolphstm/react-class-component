import React, { Component } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import Functioncomponents from './FunctionalComponents';

let count = 1 
class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          components go here
          <Functioncomponents passCount={count}/>
          <ClassComponent count={count}/>
        </header>
      </div>
    );
  }
}

export default App;
