import React, { Component } from "react";

import { connect } from "react-redux";

// Sử dụng thư viện connect để lấy dữ liệu từ store về
class GioHangRedux extends Component {
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
                  <tbody>
                    {this.props.gioHang.map((spGH, index) => {
                      return (
                        <tr key={index}>
                          <th>{spGH.maSP}</th>
                          <th>
                            <img
                              style={{ width: 70 }}
                              src={spGH.hinhAnh}
                              alt=""
                            />
                          </th>
                          <th>{spGH.tenSP}</th>
                          <th>
                            <button
                              style={{ padding: 7 }}
                              onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, true);
                              }}
                              class="btn btn-success"
                            >
                              +
                            </button>
                            {spGH.soLuong}
                            <button
                              style={{ padding: 7 }}
                              onClick={() => {
                                this.props.tangGiamSoLuong(spGH.maSP, false);
                              }}
                              class="btn btn-success"
                            >
                              -
                            </button>
                          </th>

                          <th>{spGH.giaBan.toLocaleString()}</th>
                          <th>
                            {(spGH.soLuong * spGH.giaBan).toLocaleString()}
                          </th>
                          <th>
                            <button
                              onClick={() => {
                                this.props.xoaGioiHang(spGH.maSP);
                              }}
                              class="btn btn-danger"
                            >
                              Xóa
                            </button>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng Tiền</td>
                      <td>
                        {this.props.gioHang
                          .reduce((tongTien, spGioHang, index) => {
                            return (tongTien +=
                              spGioHang.soLuong * spGioHang.giaBan);
                          }, 0)
                          .toLocaleString()}
                      </td>
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
// Hàm lấy state redux biến dổi thành props của component
const mapStateToProps = (state) => {
  // state là state tổng của ứng dụng chứa các state con (rootReducer)
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioiHang: (maSP) => {
      // Tạo action
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };

      // Dùng phương thức dispatch từ redux => gửi dữ liệu lên reducer
      // console.log(maSP);
      dispatch(action);
    },

    tangGiamSoLuong: (maSP, tangGiam) => {
      // tang = true, giam = false
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };

      // Đưa action lên reducer mỗi lần người dùng click vào
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
