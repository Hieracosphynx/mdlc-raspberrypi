import React from 'react';
import ReactDOM from 'react-dom';
import StatusProvider from './context/StatusProvider';
import './index.css';
import App from './App';

ReactDOM.render(
  <StatusProvider>
    <App />
  </StatusProvider>,
  document.getElementById('root')
);
