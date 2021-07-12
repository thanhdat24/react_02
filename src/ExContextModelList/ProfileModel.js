import React, { Component } from "react";

import { ExModelListContext } from "../ContextDemo/_Context/ExModelListContext";

export default class ProfileModel extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <ExModelListContext.Consumer>
          {(value) => {
            let activeModel = value.modeListState.find(
              (model) => model.active === true
            );
            return (
              <div className="card text-left">
                <img
                  style={{ width: 250, height: 200 }}
                  className="card-img-top"
                  src={activeModel.img}
                  alt={activeModel.img}
                />
                <div className="card-body">
                  <h4 className="card-title">Họ tên: {activeModel.name}</h4>
                  <p className="card-text">Tuổi: {activeModel.age}</p>
                  <p className="card-text">
                    Lượt like: ({activeModel.like}){" "}
                    <i style={{ color: "red" }} className="fa fa-heart"></i>
                  </p>
                </div>
              </div>
            );
          }}
        </ExModelListContext.Consumer>
      </div>
    );
  }
}
