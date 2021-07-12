import React, { Component } from "react";

import { ExModelListContext } from "../ContextDemo/_Context/ExModelListContext";

export default class ModelItem extends Component {
  render() {
    let { modelItem } = this.props;
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          return (
            <div>
              <div className="card text-left">
                <img
                  className="card-img-top"
                  src={modelItem.img}
                  alt={modelItem.img}
                />
                <div className="card-body">
                  <h4 className="card-title">Họ tên: {modelItem.name}</h4>
                  <p className="card-text">Tuổi: {modelItem.age}</p>
                  <button
                    onClick={() => {
                        value.setActiveModel(modelItem.id)
                    }}
                    style={{ border: "1px solid red", borderRadius: "5px" }}
                  >
                    {modelItem.like}{" "}
                    <i style={{ color: "red" }} className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
