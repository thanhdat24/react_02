import React, { Component } from "react";

import { ExModelListContext } from "../_Context/ExModelListContext";

export default class ExModelListProvider extends Component {
  state = {
    modelListState: [
      {
        id: 1,
        name: "Tào Tháo",
        age: 65,
        img: "./img/model/model1.png",
        like: 0,
        active: true,
      },
      {
        id: 2,
        name: "Gia Cát Lượng",
        age: 54,
        img: "./img/model/model2.png",
        like: 0,
        active: false,
      },
      {
        id: 3,
        name: "Joker",
        age: 35,
        img: "./img/model/model3.png",
        like: 0,
        active: false,
      },
      {
        id: 4,
        name: "Trâm Anh",
        age: 18,
        img: "./img/model/model4.png",
        like: 0,
        active: false,
      },
    ],
  };

  setActiveModel = (id) => {
    let modeListStateUpdate = this.state.modelListState.map((model, index) => {
      // So sánh với id được click
      if (model.id === id) {
        model.like++;
        model.active = true;
      } else model.active = false;
      return { ...model };
    });
    // Cập nhập lại giá trị state để giao diện render lại
    this.setState({
      modelListState: modeListStateUpdate,
    });
  };
  render() {
    return (
      <ExModelListContext.Provider
        value={{
          modeListState: this.state.modelListState,
          setActiveModel: this.setActiveModel,
        }}
      >
        {this.props.children}
      </ExModelListContext.Provider>
    );
  }
}
