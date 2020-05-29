import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import App from './App';
import ScrollToTop from './shared/util/ScrollToTop';

const app = (
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
