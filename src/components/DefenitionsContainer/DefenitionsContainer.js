import React from "react";

// Стили
import defStyles from "./DefenitionsContainer.module.css";
// Стили

import { useDrop } from "react-dnd";

// Компоненты
import Card from "../Card/Card";
// Компоненты

import sound from "../../sounds/sound.mp3";

function DefenitionsContainer(props) {
  const [, dropTarget] = useDrop({
    accept: "animal",
    drop(itemId) {
      props.onDropHandler(itemId);
      const audio = new Audio();
      audio.src = sound;
      audio.play();
    },
  });

  return (
    <section className={defStyles.container}>
      <ul className={defStyles.list} ref={dropTarget}>
        {props.draggedElements.map((item) => {
          return <Card animal={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

export default DefenitionsContainer;
