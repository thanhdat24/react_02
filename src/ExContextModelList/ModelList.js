import React, { Component } from "react";

import { ExModelListContext } from "../ContextDemo/_Context/ExModelListContext";
import ModelItem from "./ModelItem";

export default class ModelList extends Component {
  render() {
    return (
      <ExModelListContext.Consumer>
        {(value) => {
          console.log(value);
          return (
            <div>
              <h3>Danh sách idol</h3>
              <div className="row">
                {value.modeListState.map((model, index) => {
                  return (
                    <div key={index} className="col-3">
                      <ModelItem modelItem={model} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }}
      </ExModelListContext.Consumer>
    );
  }
}
