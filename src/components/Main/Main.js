import React from "react";

// Стили
import mainStyles from "./Main.module.css";
// Стили

// Компоненты
import CardsContainer from "../CardsContainer/CardsContainer";
import DefenitionsContainer from "../DefenitionsContainer/DefenitionsContainer";
// Компоненты

// DND
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
// DND

import animals from "../../constants/animals";


function Main() {
  const [elements, setElements] = React.useState(animals);
  const [draggedElements, setDraggedElements] = React.useState([]);

  console.log(elements)
  const handleDrop = (itemId) => {
    setElements([...elements.filter((element) => element.id !== itemId.id)]);

    setDraggedElements([
      ...draggedElements,
      ...elements.filter((element) => element.id === itemId.id),
    ]);
  };

  return (
    <main className={mainStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <CardsContainer elements={elements}/>
        <DefenitionsContainer onDropHandler={handleDrop} draggedElements={draggedElements}/>
      </DndProvider>
    </main>
  );
}

export default Main;
