import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={item.img} alt="" />
        <div className="card-body">
          <h3 className="card-title fw-bold">{item.name}</h3>
          <p className="card-text">{item.price}</p>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              this.props.xemChiTiet(item);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
