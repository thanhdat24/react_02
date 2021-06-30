import React, { Component } from "react";

import CartModal from "./CartModal";
import ProductList from "./ProductList";

export default class ExerciseCart extends Component {
  state = {
    gioHang: [
      // {
      //   maSP: 1,
      //   hinhAnh: "",
      //   tenSP: "Tên mặc định",
      //   soLuong: 1,
      //   giaBan: 0,
      // },
    ],
  };

  themGioHang = (sanPham) => {
    console.log(sanPham);
    let spGioHang = {
      maSP: sanPham.maSP,
      hinhAnh: sanPham.hinhAnh,
      tenSP: sanPham.tenSP,
      soLuong: 1,
      giaBan: sanPham.giaBan,
    };
    let gioHang = [...this.state.gioHang];
    // Tìm xem sản phẩm có trong giỏi hàng chưa
    let index = gioHang.findIndex((spGH) => spGH.maSP === spGioHang.maSP);
    if (index !== -1) {
      // tìm thấy sản phẩm được click chứa trong giỏi hàng
      gioHang[index].soLuong += 1;
    } else {
      gioHang.push(spGioHang);
    }
    // push vào state.gioHang hiện tại
    // let gioHangCapNhat = [...this.state.gioHang, spGioHang];

    this.setState({
      gioHang: gioHang,
    });
  };

  xoaGioiHang = (maSP) => {
    let gioHang = [...this.state.gioHang];
    // Thực hiện tính năng xóa giỏ hàng
    console.log(maSP);
    let index = gioHang.findIndex((spGH) => spGH.maSP === maSP);

    if (index !== -1) {
      gioHang.splice(index, 1);
    }

    this.setState({
      gioHang: gioHang,
    });
  };

  tinhTongSoLuong = () => {
    /* Dung For */
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spGioHang = this.state.gioHang[i];
    //   tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;
    /* Reduce */

    return this.state.gioHang
      .reduce((tongSoLuong, spGioHang, index) => {
        return (tongSoLuong += spGioHang.soLuong);
      }, 0)
      .toLocaleString();
  };

  tangGiamSoLuong = (maSP, number) => {
    let gioHang = [...this.state.gioHang];

    let index = gioHang.findIndex((spGH) => spGH.maSP === maSP);

    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert("Số lượng sản phẩm tối thiểu là 1!");
        return;
      }
      gioHang[index].soLuong += number;
    }

    this.setState({
      gioHang: gioHang,
    });
  };

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
            <i class="fa fa-cart-arrow-down"></i>({this.tinhTongSoLuong()}) Giỏ
            hàng
          </span>
        </div>
        <CartModal
          tangGiamSoLuong={this.tangGiamSoLuong}
          xoaGioiHang={this.xoaGioiHang}
          gioHang={this.state.gioHang}
        />
        <ProductList themGioHang={this.themGioHang} />
      </div>
    );
  }
}
