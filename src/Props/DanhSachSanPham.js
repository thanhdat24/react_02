import React, { Component } from "react";

import SanPham from "./SanPham";
import dataPhone from "../Data/dataPhone.json";

export default class DanhSachSanPham extends Component {
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
          <SanPham xemChiTiet={this.xemChiTiet} sanPhamProps={sanpham} />
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamChon) => {
    this.setState({
      sanPhamChiTiet: sanPhamChon,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-success fw-bold">Danh Sach San Pham</h3>
        <div className="row">{this.renderSanPham()}</div>
        <div className="row mt-5">
          <div className="col-4">
            <h2 className="m-0 text-center">
              {this.state.sanPhamChiTiet.tenSP}
            </h2>
            <img
              style={{ width: 350, height: 350, marginLeft: "1.5rem" }}
              src={this.state.sanPhamChiTiet.hinhAnh}
              alt={this.state.sanPhamChiTiet.tenSP}
            />
          </div>
          <div className="col-8">
            <h2 className="m-0">Thông Số Kỹ Thuật</h2>
            <table class="table">
              <thead>
                <tr>
                  <th>Màn hình</th>
                  <td>{this.state.sanPhamChiTiet.manHinh}</td>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>{this.state.sanPhamChiTiet.ram}</td>
                </tr>
                <tr>
                  <th>ROM</th>
                  <td>{this.state.sanPhamChiTiet.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
