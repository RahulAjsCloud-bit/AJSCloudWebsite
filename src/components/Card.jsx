import React from "react";
import "../css/card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="ajs-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
