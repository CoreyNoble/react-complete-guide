import React, { Component } from 'react';
import './App.css';
import UserInput from './Assignment-1-Base-Syntax/UserInput/UserInput';
import UserOutput from './Assignment-1-Base-Syntax/UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'CoreyNoble'
  }

  ChangeUserName = (event) => {
    this.setState( {
      userName: event.target.value
    } )
  }

  render () {
    const style = {
      backgroundColor: 'red',
    };

    return (
      <div className="App">
        <UserInput
         userName = {this.state.userName}
         changed={this.ChangeUserName} />
        <UserOutput
         userName = {this.state.userName} />
        <UserOutput
         style={style}
         userName = {this.state.userName} />
      </div>
    );
  }
}

export default App;
