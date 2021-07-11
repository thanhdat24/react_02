import React, { Component } from "react";

import Profile from "./Profile";

export default class DemoPureComponent extends Component {
  state = {
    like: 0,
    // like: { soLuong: 0 }, // Là object không phải dữ liệu nguyên thủy nên kh hiểu
  };
  // Không được lạm dụng pure component
  likeReact = () => {
    let likeHienTai = this.state.like + 1;
    this.setState({
      like: likeHienTai,
    });
  };
  render() {
    return ( 
      <div className="container">
        <h3 className="text-center">Profile Lê Thị A</h3>
        <Profile like={this.state.like} />
        <br />
        <div className="card text-left">
          <h3>
            Số lượt thả tim:{" "}
            <span className="text-danger">{this.state.like}</span>
          </h3>
          <div className="card-body">
            <button
              onClick={() => {
                this.likeReact();
              }}
              className="btn"
              style={{ color: "red", border: "2px solid red" }}
            >
              Thả tim{" "}
              <span className="text-danger">
                <i className="fa fa-heart"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
