import React from "react";
import "./card.css";
const Card = ({title,p ,imag}) => {
  return (
    <div className="card" style={{background:`url(${imag})` ,color:'white'}}>
      <h1>{title}</h1>
      <p>{p}</p>
      
    </div>
  );
};

export default Card;
