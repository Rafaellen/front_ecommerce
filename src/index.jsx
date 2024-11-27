// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Certifique-se de que o caminho está correto e corresponde ao arquivo que você deseja usar
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);