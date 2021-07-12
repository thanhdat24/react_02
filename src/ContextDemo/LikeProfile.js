import React, { Component } from "react";

import { ModelContext } from "./_Context/ModelContext";

export default class LikeProfile extends Component {
  render() {
    return (
      <ModelContext.Consumer>
        {(value) => {
          return (
            <div className="mt-5">
              <div
                style={{ width: 250, border: "1px solid blue" }}
                className="card text-left text-dark, bg-default"
              >
                <div className="card-body">
                  <button
                    onClick={() => {
                      value.setLike();
                    }}
                    style={{ color: "red", border: "2px solid red" }}
                  >
                    Like <i className="fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ModelContext.Consumer>
    );
  }
}
