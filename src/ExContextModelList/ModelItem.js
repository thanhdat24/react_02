import React, { Component } from "react";

export default class ModelItem extends Component {
  render() {
    return (
      <div>
        <div className="card text-left">
          <img
            className="card-img-top"
            src="./img/model/model2.png"
            alt="img"
          />
          <div className="card-body">
            <h4 className="card-title">Họ tên: default</h4>
            <p className="card-text">Tuổi: default</p>
            <button
              onClick={() => {}}
              style={{ border: "1px solid red", borderRadius: "5px" }}
            >
              8 <i style={{ color: "red" }} className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
