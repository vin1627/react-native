import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

ReactDOM.render(
  <App />
  ,document.getElementById('root'));
registerServiceWorker();
