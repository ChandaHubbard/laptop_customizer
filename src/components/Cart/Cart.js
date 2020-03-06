import React, { Component } from 'react';
import './Cart.css';
import CartTotal from '../CartTotal/CartTotal';
import CartContents from '../CartContents/CartContents';


function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <CartContents
            summary={props.summary}
            />

            

            <CartTotal
            USCurrencyFormat={props.USCurrencyFormat}
            total={props.total}/>
          </section>
    )
}

export default Cart;