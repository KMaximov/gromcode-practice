// 0. create project - скласти проект
// 1. make static layout - зверстати html/css
// 2. divide into components
// 3. static react version 
// 4. declare state and props
// 5. write logic

// де є стейт - використовувати класову
// де не має - функціональну компоненту

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import Auth from './Auth';

const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Auth />, rootElement);