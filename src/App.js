import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { throws } from 'assert';
import Validation from './Assignment-2-Working-with-Lists-and-Conditionals/Validation/Validation';
import Char from './Assignment-2-Working-with-Lists-and-Conditionals/Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: 'Corey', age: 26 },
      { id: '002', name: 'Kaitlin', age: 26 },
      { id: '003', name: 'Dante', age: 5 }
    ],
    otherState: 'some other value',
    showPersons: false,
    userInput: '',
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

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
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

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

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
        <input type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
