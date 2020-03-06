import React, { Component } from 'react';
import './ListParts.css';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class ListParts extends Component{

    render(props) {
      return (
        <div
        key={this.props.itemHash}
        className="feature__item">
          <input
            type="radio"
            id={this.props.itemHash}
            className="feature__option"
            // name={slugify(feature)}
            // checked={this.props.item.name === this.state.selected[this.props.feature].name}
            // onChange={e => this.updateFeature(this.props.feature, this.props.item)}
          />
          <label
          htmlFor={this.props.itemHash}
          className="feature__label">
            {/* {this.props.item.name} */}
            {/* ({USCurrencyFormat.format(item.cost)}) */}
          </label>
        </div>
      );
      return (
        <div className="list-parts">
        <fieldset className="feature"
        key={props.features.featureHash}
        >
          <legend className="feature__name">
            <h3>
              {props.feature}
              </h3>
          </legend>
          {props.options}
        </fieldset>
        </div>
      )
    }
}

export default ListParts;