import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import App from './Assignment1/App';
//import App from './Assignment2/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
