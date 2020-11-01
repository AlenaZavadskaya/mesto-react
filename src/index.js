import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// // Функция, отвечающая за отрисовку интерфейса
// function renderAll() {
// 	ReactDOM.render((
// 		<App />
// 	), document.getElementById('root'));
// }

// // Вызов первичной отрисовки при открытии страницы
// renderAll();