import React, { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import getData from './db/db';
import './App.css'

const tele = window.Telegram.WebApp;

function App() {
  const foods = getData();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    tele.ready();
  });

  const onAdd = (food) => {
    const exist = cart.find(x => x.id === food.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cart.find(x => x.id === food.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => food.id !== x.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    tele.MainButton.text = "pay";
    tele.MainButton.show();
  };

  return (
<div>
      <h1 className="heading">Ethio Collection</h1>
      <Cart cart={cart} onCheckout = {onCheckout} /> 

      <div className="card_container">
        {foods.map((food) => (
          <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
        ))}
      </div> 
    </div>
  )
}

export default App
