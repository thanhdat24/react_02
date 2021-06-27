import React, { Component } from "react";

export default class Child extends Component {
  renderSize = () => {
    let { size } = this.props.productItem;
    return size.map((number, index) => {
      return <button key={index}>{number}</button>;
    });
  };

  render() {
    let { bearSize } = this.props;
    let { src, name, desc } = this.props.productItem;
    return (
      <div>
        <img style={{ width: 100 }} src={src} alt="" />
        <div className="card text-left">
          <img
            style={{ width: 200 }}
            className="card-img-top"
            src={src}
            alt={name}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{desc}</p>
            {this.renderSize()}
            <br />
            {bearSize.map((number, index) => {
              return <button key={index}>{number}</button>;
            })}
            <br />
            <button
              onClick={() => {
                this.props.showAlert(desc);
              }}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
