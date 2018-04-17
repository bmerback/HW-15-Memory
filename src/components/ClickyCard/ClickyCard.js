import React from "react";
import "./ClickyCard.css";

const ClickyCard = props => (
  <div className="card">
    <div className="img-container">
      <img
        className="clicky-card-img"
        onClick={(props) => props.scorePoints}
        alt={props.name}
        title={`${props.name} picture`}
        src={props.image}
      />
    </div>
  </div>
);

export default ClickyCard;