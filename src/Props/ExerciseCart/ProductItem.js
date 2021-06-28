import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { sanPhamProps } = this.props;

    return (
      <div className="card text-left">
        <img
          style={{ width: 350, height: 350 }}
          className="card-img-top"
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProps.tenSP}</h4>
          <p className="card-text">{sanPhamProps.price}</p>
          <button onClick={() => {}}
           className="btn btn-success">
            Thêm Giỏ Hàng
          </button>
        </div>
      </div>
    );
  }
}
