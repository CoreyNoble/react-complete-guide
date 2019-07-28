import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { throws } from 'assert';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: 'Corey', age: 26 },
      { id: '002', name: 'Kaitlin', age: 26 },
      { id: '003', name: 'Dante', age: 5 }
    ],
    otherState: 'some other value',
    showPersons: false,
    validateLength: null,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  validateLengthHandler = (event) => {
    const lengthValue = event.target.value.length;
    this.setState({validateLength: lengthValue})
    // if (event.target.charLength < 5){
    //   return;
    // } else if (event.target.charLength > 60) {
    //   return;
    // }
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
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    let characterLength = null;

    if (this.state.validateLength != null) {
      characterLength = (
        <p>Characters: {this.state.validateLength}</p>
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
        <br /><br />
        <p>Validate Length</p>
        <input onChange={this.validateLengthHandler} />
        {characterLength}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
