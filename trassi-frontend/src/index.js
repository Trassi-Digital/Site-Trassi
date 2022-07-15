import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './bootstrap.min.css';
import './App.css';
import Home from "./page/Home"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);


