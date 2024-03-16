import React from 'react'
import menuItems from './stock.js'                                                 
import { useState } from 'react'
import shoppinglogo from '/shopping-cart.svg'
import './App.css'

function App({ menuItems }) {
  // const [count, setCount] = useState(0)
  // const [stock, setStock] = React.useState(menuitems);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    setTotalItems(totalItems + 1);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
    setTotalItems(totalItems - 1);
  };

  console.log(`Cart: ${JSON.stringify(menuItems)}`);

  // setStock([...newStock]);
  return (
    <>
      <div>
        <a href="https://github.com/luguipe" target="_blank">
          <img src={shoppinglogo} className="logo react" alt="shopping logo" />
        </a>
      </div>
      <h1>Shopping Cart</h1>
      <div className="card">
        <h2>Cart Items:</h2>
        <ul>
          {cartItems.map((cartItem, index) => (
            <li key={index}>
              {cartItem.name} <button onClick={() => removeFromCart(cartItem)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Items: {totalItems}</p>
        <h2>Available Items:</h2>
          <ul>
            {menuItems && menuItems.map((item, index) => (
              <li key={index}>
                {item.name} ({item.instock} in stock) <button onClick={() => addToCart(item)}>Add to Cart</button>
              </li>
            ))}
         </ul>
      </div>
    </>
  );
}

// const menuItems = [
//   { name: "apple", instock: 2 },
//   { name: "pineapple", instock: 3 },
//   { name: "pear", instock: 0 },
//   { name: "peach", instock: 3 },
//   { name: "orange", instock: 1 },
// ];

console.log(`Cart: ${JSON.stringify(menuItems)}`);

export default App
