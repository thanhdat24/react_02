import React, { Component } from "react";

import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default class ExerciseCart extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center fw-bold">Bài Tập Giỏ Hàng</h3>
        <div className="text-end">
          <span
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              cursor: "pointer",
              padding: 10,
              backgroundColor: "#31DEAB",
            }}
          >
            <i class="fa fa-cart-arrow-down"></i>(0) Giỏ hàng
          </span>
        </div>
        <CartModal />
        <ProductList />
      </div>
    );
  }
}
