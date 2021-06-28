import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPhamProps } = this.props;
    return (
      <div className="card text-left text-center">
        <img
          style={{ width: 350, height: 350 }}
          className="card-img-top ms-4"
          src={sanPhamProps.hinhAnh}
          alt={sanPhamProps.tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProps.tenSP}</h4>
          <p className="card-text">{sanPhamProps.giaBan.toLocaleString()}</p>
          <button
            onClick={() => {
              this.props.xemChiTiet(sanPhamProps);
            }}
            className="btn btn-success"
          >
            Xem Chi Tiết
          </button>
        </div>
      </div>
    );
  }
}
