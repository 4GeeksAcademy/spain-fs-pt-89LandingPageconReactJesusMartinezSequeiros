import React from "react";

const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;