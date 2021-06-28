import React, { Component } from "react";

import Child from "./Child";

// import ChildFunctional from "./ChildFunctional";

export default class Parent extends Component {
  // product = {
  //   id: "1",
  //   name: "bach tuoi cam xuc",
  //   src: "https://cf.shopee.vn/file/92939067cb9e82b889926fb691cda015",
  //   desc: "Shop chất lượng cao, giá bao rẻ",
  //   price: "100",
  //   size: [10, 11, 12, 13, 14],
  // };

  // size = [10, 11, 12, 13, 14];

  // showInfo = (name) => {
  //   alert(name);
  // };
  render() {
    return (
      <div>
        {/* <ChildFunctional productItem={this.product} /> */}
        {/* <Child productItem={this.product} bearSize={this.size} showAlert={this.showInfo} /> */}
        <h3>Danh Sách Sản Phẩm</h3>
        {this.props.children}
      </div>
    );
  }
}
