import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 },
];

ReactDOM.render(
  <App menuItems={menuItems} />,
  document.getElementById('root')
);
