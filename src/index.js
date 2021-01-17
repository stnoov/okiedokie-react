import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./redux/store";

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap" rel="stylesheet" />
          <Provider store={store}>
            <App />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

