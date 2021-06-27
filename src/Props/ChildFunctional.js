import React from "react";

export default function ChildFunctional(props) {

    let {src,name,desc} = props.productItem;
  return (
    <div>
      <img style={{ width: 100 }} src={src} alt="123" />
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
        </div>
      </div>
    </div>
  );
}
