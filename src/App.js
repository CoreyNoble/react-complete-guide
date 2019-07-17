import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Corey', age: 26 },
      { name: 'Kaitlin', age: 26 },
      { name: 'Dante', age: 5 },
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Corey Noble', age: 26 },
        { name: 'Kaitlin', age: 26 },
        { name: 'Dante', age: 6 },
      ]
    });
  }

  render() {
    return (
      // JSX expression must have one root element.
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Child element.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          <p>My Hobbies: Reading</p>
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      // Cant add another <h1> below.
      // <p>!- Won't work</p>
    );

    // The JSX code above compiles to the below inside of 'React Component'.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
