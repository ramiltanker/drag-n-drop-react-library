import React from "react";

// Стили
import iconnStyles from "./Icon.module.css";
// Стили

// DND
import { useDrag } from "react-dnd";
// DND

function Icon(props) {
  const [{ isDrag }, dragRef] = useDrag({
    type: "animal",
    item: { id: props.animal.id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  React.useEffect(() => {
    props.handleIsDrag(isDrag);
  }, [isDrag, props]);

  return (
    !isDrag && (
      <li className={iconnStyles.li} ref={dragRef}>
        <img
          src={props.animal.img}
          alt={props.animal.name}
          className={iconnStyles.img}
        />
      </li>
    )
  );
}

export default Icon;
