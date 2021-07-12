import React, { Component } from "react";

import { ModelContext } from "./_Context/ModelContext";

export default class ModelProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div>
              <h3 className="text-center">Profile</h3>
              <div className="card text-left">
                <img
                  style={{ width: 250, height: 300 }}
                  className="card-img-top"
                  src="https://vcdn-ngoisao.vnecdn.net/2021/06/26/hot-girl-trung-ran-1-162468484-3383-1569-1624685203.jpg"
                  alt="img"
                />
                <div
                  style={{ width: 250 }}
                  className="card-body bg-dark text-light"
                >
                  <h4 className="card-title">Tên: Lê Thị A</h4>
                  <p className="card-text">Tuổi: 18</p>
                  <span style={{ color: "red", fontSize: "20px" }}>
                    {value.stateLike} <i className="fa fa-heart"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
