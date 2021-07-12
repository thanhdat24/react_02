import React, { Component } from "react";

export default class ProfileModel extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <div className="card text-left">
          <img
            style={{ width: 250, height: 200 }}
            className="card-img-top"
            src="./img/model/model1.png"
            alt="img"
          />
          <div className="card-body">
            <h4 className="card-title">Họ tên: Tào Tháo</h4>
            <p className="card-text">Tuổi: 65</p>
            <p className="card-text">
              Lượt like: (8){" "}
              <i style={{ color: "red" }} className="fa fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
