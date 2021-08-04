import React from "react";

// Стили
import cardsStyles from "./CardsContainer.module.css";
// Стили

// Компоненты
import Icon from "../Icon/Icon";
// Компоненты

import arrow from "../../images/arrow.png";

function CardsContainer(props) {
  
  const [isDrag, setIsDrag] = React.useState(false);

  const handleIsDrag = (boolean) => {
    setIsDrag(boolean);
  }

  return (
    <section className={cardsStyles.container}>
      <ul className={cardsStyles.list}>
        {props.elements.map((item) => {
          return <Icon animal={item} key={item.id} handleIsDrag={handleIsDrag} />;
        })}
      </ul>
      <img src={arrow} alt="arrow" className={!isDrag ? cardsStyles.arrow_hide : cardsStyles.arrow} />
    </section>
  );
}

export default CardsContainer;
