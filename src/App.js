<<<<<<< HEAD
import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));
=======
import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
>>>>>>> section-14-redux

class App extends Component {
  state = { showPosts: false };
  
  modeHandler = () => {
    this.setState(prevState => {
      return { showPosts: !prevState.show };
    });
  }

  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <button onClick={this.modeHandler}>Toggle Mode</button>
        
        {this.state.showPosts ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>
        ) : (
          <User />
        )}
      </React.Fragment>

      // 'basename="/"' is the ROOT URL forthe application.
      // <BrowserRouter basename="/">
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route path="/posts" 
      //       render={() => (
      //         <Suspense fallback={<div>Loading...</div>}>
      //           <Posts />
      //         </Suspense>
      //       )} 
      //     />
      //   </React.Fragment>
      // </BrowserRouter>
=======
      <div className="App">
       <Counter />
      </div>
>>>>>>> section-14-redux
    );
  }
}

export default App;
