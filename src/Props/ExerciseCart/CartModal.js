import React, { Component } from "react";

export default class Cart extends Component {
  renderCart = () => {
    let { gioHang } = this.props;
    return gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img style={{ width: 70 }} src={item.hinhAnh} alt="" />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.soLuong * item.giaBan).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioiHang(item.maSP);
              }}
              class="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    let { gioHang } = this.props;
    return gioHang
      .reduce((tongTien, spGioHang, index) => {
        return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
      }, 0)
      .toLocaleString();
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div style={{ minWidth: 800 }} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table class="table">
                  <thead>
                    <tr className="p-5">
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng Tiền</td>
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
