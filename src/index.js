import React from 'react';
import ReactDOM from 'react-dom';

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
