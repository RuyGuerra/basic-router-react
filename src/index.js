import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';

const rootApp = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(rootApp, document.getElementById('root'));
