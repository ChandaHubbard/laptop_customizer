import React, { Component } from "react";
import "./SelectParts.css";
import ListParts from "../ListParts/ListParts";
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class SelectParts extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

      });

    });
    return (
      <div className="SelectParts">
        <form className="main__form">
          <h2>Customize your laptop</h2>
            {features}
            <ListParts features={this.props.features}
            // featureHash={this.props.featureHash}
            // options={this.props.options}
            // itemHash={this.props.itemHash}
            />
        </form>
      </div>
    );
  }
}

SelectParts.defaultProps = {
  features: []
};

export default SelectParts;
