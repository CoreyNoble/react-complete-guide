import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Corey', age: 26 },
      { name: 'Kaitlin', age: 26 },
      { name: 'Dante', age: 5 },
    ],
    otherState: 'some other value'  
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked');
    setPersonsState({
      persons: [
        { name: 'Corey Noble', age: 26 },
        { name: 'Kaitlin', age: 26 },
        { name: 'Dante', age: 6 },
      ]
    });
  }

  return (
    // JSX expression must have one root element.
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Child element.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
        <p>My Hobbies: Reading</p>
      </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    // Cant add another <h1> below.
    // <p>!- Won't work</p>
  );

  // The JSX code above compiles to the below inside of 'React Component'.
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
}

export default App;