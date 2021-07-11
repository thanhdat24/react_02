import React, { Component, PureComponent } from "react";

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="card text-left">
        <img
          style={{ width: 200, height: 250 }}
          className="card-img-top"
          src="https://vnn-imgs-f.vgcloud.vn/2021/05/27/20/nhan-sac-vu-thi-anh-thu-hot-girl-phim-ve-nha-di-con-1.jpg"
          alt="123"
        />
        <div style={{ width: 200 }} className="card-body  bg-dark text-light">
          <h3>
            {" "}
            Số lượt tim: <span className="text-danger">{this.props.like}</span>
          </h3>
          <h4 className="card-title">Lê Thị A</h4>
          <p className="card-text">Tuổi: 18</p>
        </div>
      </div>
    );
  }
}
