import React from "react";
import "../Card/Card.scss";

const Card = ({ city }) => {
  const cityNameClass = city.name.toLowerCase();

  return (
    <div className={`city-card ${cityNameClass}`}>
      <h2>{city.name}</h2>
      <p>{city.description}</p>
    </div>
  );
};

export default Card;
