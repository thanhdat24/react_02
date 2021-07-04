import React, { Component } from "react";

import GioHangRedux from "./GioHangRedux";
import ProductListRedux from "./ProductListRedux";
import { connect } from "react-redux";

// Import thư viện connect kết nối react component - redux store

class BaiTapGioHangRedux extends Component {
  renderSoLuong = () => {
    return this.props.gioHang
      .reduce((tongSoLuong, spGH, index) => {
        return (tongSoLuong += spGH.soLuong);
      }, 0)
      .toLocaleString();
  };

  render() {
    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="text-end mb-5">
          <span
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              cursor: "pointer",
              padding: 10,
              backgroundColor: "#31DEAB",
            }}
          >
            <i className="fa fa-cart-arrow-down"></i>({this.renderSoLuong()})
            Giỏ hàng
          </span>
        </div>
        <ProductListRedux />
        <GioHangRedux />
      </div>
    );
  }
}
// Viết hàm lấy giá trị state từ redux store và biến thành props component
const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};
export default connect(mapStateToProps)(BaiTapGioHangRedux);
