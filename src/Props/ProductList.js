import React, { Component } from "react";

import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrProduct.map((item, index) => {
      return (
        <div className="col-4 mt-3" key={index}>
          <ProductItem dataItem={item} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
