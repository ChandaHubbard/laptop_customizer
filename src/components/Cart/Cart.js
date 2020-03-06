import React, { Component } from 'react';
import './Cart.css';
import CartTotal from '../CartTotal/CartTotal';
import CartContents from '../CartContents/CartContents';


class Cart extends Component{
    render() {
        return (
            <div className="Cart">
                <h2>Your cart</h2>
                {/* {summary} */}
            <CartContents summary={this.props.summary}/>
            <CartTotal summary={this.props.summary}/>
            </div>
        )
    }
}

export default Cart;