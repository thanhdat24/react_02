import React, { Component } from "react";

import ProductItemRedux from "./ProductItemRedux";
import dataPhone from "../Data/dataPhone.json";

export default class ProductListRedux extends Component {
   mangSanPham = dataPhone;
  renderProductItem = () => {
    return this.mangSanPham.map((sanPham, index) => {
     return <div className="col-4" key={index}>
        <ProductItemRedux product={sanPham} />
      </div>;
    });
  };
  render() {
    return <div className="row">{this.renderProductItem()}</div>;
  }
}
