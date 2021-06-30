import React, { Component } from "react";

import ProductItem from "./ProductItem";
import dataPhone from "../../Data/dataPhone.json"

export default class ProductList extends Component {
  mangSanPham = dataPhone;
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };

  renderSanPham = () => {
    return this.mangSanPham.map((sanpham, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem themGioHang={this.props.themGioHang} xemChiTiet={this.xemChiTiet} sanPhamProps={sanpham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Danh Sách Sản Phẩm</h3>
        
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
