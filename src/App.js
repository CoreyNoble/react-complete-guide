import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { throws } from 'assert';

class App extends Component {
  state = {
    persons: [
      { name: 'Corey', age: 26 },
      { name: 'Kaitlin', age: 26 },
      { name: 'Dante', age: 5 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Corey';
    this.setState( {
      persons: [
        { name: newName, age: 26 },
        { name: 'Kaitlin', age: 26 },
        { name: 'Dante', age: 6 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Corey', age: 26 },
        { name: event.target.value, age: 26 },
        { name: 'Dante', age: 6 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
