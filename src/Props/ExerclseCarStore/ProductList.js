import React, { Component } from "react";

import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.productsData.map((product, index) => {
      return (
        <div className="col-3" key={index}>
         <ProductItem xemChiTiet={this.props.xemChiTiet} item={product}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
            <h2 className="fw-bold">Danh sách xe</h2>
            {this.renderProductItem()}
            </div>
      </div>
    );
  }
}
