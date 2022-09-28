import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(p) => (
          <div>
            <input
              value={minutes}
              onChange={onMinutesChange}
              type="number"
              placeholder="Minutes"
            />
            <input
              onChange={onHoursChange}
              type="number"
              placeholder="Hours"
              value={hours}
            />
            <ul ref={p.innerRef} {...p.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(p) => (
                  <li ref={p.innerRef} {...p.draggableProps}>
                    <span {...p.dragHandleProps}>1️⃣</span>1 11
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(p) => (
                  <li ref={p.innerRef} {...p.draggableProps}>
                    <span {...p.dragHandleProps}>2️⃣</span> 222222
                  </li>
                )}
              </Draggable>
            </ul>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
