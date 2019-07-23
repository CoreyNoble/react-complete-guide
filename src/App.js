import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './Assignment-1-Base-Syntax/UserInput/UserInput';
import UserOutput from './Assignment-1-Base-Syntax/UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: 'Corey', age: 26 },
      { name: 'Kaitlin', age: 26 },
      { name: 'Dante', age: 5 }
    ],
    otherState: 'some other value',
    userName: 'CoreyNoble'
  }

  ChangeUserName = (event) => {
    this.setState( {
      userName: event.target.value
    } )
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

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        {/* <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Corey!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Corey!')}
          changed={this.nameChangedHandler} >My Hobbies: Reading</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} /> */}
        <UserInput
         userName = {this.state.userName}
         changed={this.ChangeUserName} />
        <UserOutput
         userName = {this.state.userName} />
        <UserOutput />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
