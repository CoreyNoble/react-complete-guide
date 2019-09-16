import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import './index.css';
import App from './App';
<<<<<<< HEAD
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
=======
import AuthContextProvider from './context/auth-context';

ReactDOM.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>, 
    document.getElementById('root')
);
>>>>>>> section-26-react-hooks
=======
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/products-store';
import configureCounterStore from './hooks-store/counter-store';

configureProductsStore();
configureCounterStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
>>>>>>> section-28-replacing-redux-with-react-hooks
