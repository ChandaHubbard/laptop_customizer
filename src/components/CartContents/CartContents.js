import React, { Component } from 'react';
import './CartContents.css';

function CartContents(props) {
  return (
    <div>{props.summary}</div>
//   <div className="summary__option" key={props.featureHash}>
//   <div className="summary__option__label">{props.feature} </div>
//   <div className="summary__option__value">{props.selectedOption.name}</div>
//   <div className="summary__option__cost">
//     {props.USCurrencyFormat.format(props.selectedOption.cost)}
//   </div>
// </div>
)
}

export default CartContents;
