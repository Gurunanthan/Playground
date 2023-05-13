import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Content from './Content';
import Apidata from './Apidata';
import Textbox from './Textbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Content/>
    <Textbox/>
  </React.StrictMode>
);
reportWebVitals();
