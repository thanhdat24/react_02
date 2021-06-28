import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div>
        <div className="card text-black " style={{ width: 320 }}>
          <img
            className="card-img-top w3-animate-zoom"
            src={this.props.dataItem.image}
            alt={this.props.dataItem.name}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.dataItem.name}</h5>
            <p className="card-text">{this.props.dataItem.price}</p>
            <button className="w3-button w3-black">
              View detail <i class="fa fa-cart-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
