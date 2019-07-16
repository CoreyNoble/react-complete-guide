import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      // JSX expression must have one root element.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Child element.</p>
        <Person />
      </div>
      // Cant add another <h1> below.
      // <p>!- Won't work</p>
    );

    // The JSX code above compiles to the below inside of 'React Component'.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
