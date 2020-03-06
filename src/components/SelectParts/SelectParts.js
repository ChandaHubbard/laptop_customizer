import React, { Component } from "react";
import "./SelectParts.css";
import ListParts from "../ListParts/ListParts";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

function SelectParts(props) {
  return (
    <form className="main__form">
    <h2>Customize your laptop</h2>
    {props.features}
    <div className="summary__option" key={props.featureHash}>
        <div className="summary__option__label">{props.feature} </div>
        {/* <div className="summary__option__value">{props.selectedOption.name}</div> */}
        {/* <div className="summary__option__cost">
          {props.USCurrencyFormat.format(props.selectedOption.cost)}
        </div> */}
      </div>
    <ListParts
    features={props.features}
    featureHash={props.featureHash}
    />
  </form>
  );
}

export default SelectParts;
