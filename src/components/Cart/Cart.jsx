import React from 'react';
import "./Cart.css";
import Button from '../Button/Button';

function Cart ({ cart,onCheckout }){
  const totalPrice = cart.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart_container">
      {cart.length === 0 ? "Order!" : ""}
      <br /> 
      <span className='total_price'>Total Price: ${totalPrice.toFixed(2)}</span>
      <Button 
        title={cart.length === 0 ? "Order!" : "Checkout"} 
        type={"checkout"}
        disabled={cart.length === 0}
        onClick={onCheckout}
      />
    </div>
  );
}

export default Cart;
