import React from "react";

// Стили
import cardStyles from "./Card.module.css";
// Стили

function Card(props) {
  return (
    <li className={cardStyles.li}>
      <img
        src={props.animal.img}
        alt={props.animal.name}
        className={cardStyles.img}
      />
      <h2 className={cardStyles.name}>{props.animal.name}</h2>
      <p className={cardStyles.text}>{props.animal.text}</p>
    </li>
  );
}

export default Card;
