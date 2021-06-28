import React, { Component } from "react";

import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ExerclseCarStore extends Component {
  state = {
    productDetails: {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
  };

  xemChiTiet = (newProduct) => {
    this.setState({
      productDetails: newProduct,
    });
  };
  products = [
    {
      id: 1,
      name: "black car",
      img: "./img/products/black-car.jpg",
      price: 1000,
    },
    {
      id: 2,
      name: "red car",
      img: "./img/products/red-car.jpg",
      price: 2000,
    },
    {
      id: 1,
      name: "silver car",
      img: "./img/products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 1,
      name: "steel car",
      img: "./img/products/steel-car.jpg",
      price: 4000,
    },
  ];

  render() {
    return (
      <div>
        <Modal content={this.state.productDetails} />
        <ProductList productsData={this.products}  xemChiTiet={this.xemChiTiet}/>
      </div>
    );
  }
}
