import React from "react";
// Styles
import { DragWrap, PlayerItem, Wrapper } from "./QueueDnD.styles";
import { v4 as uuidv4 } from "uuid";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DragIcon } from "../Icons/Icons";
const INITIAL_LIST = [
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
  {
    id: uuidv4(),
    name: "Derrick Henry",
  },
];

const Item = ({ index, item, dragItemStyle = {}, children }) => (
  <Draggable index={index} draggableId={item.id}>
    {(provided, snapshot) => (
      <DragWrap
        ref={provided.innerRef}
        {...provided.draggableProps}
        // {...provided.dragHandleProps}
        style={{
          // default item style
          // padding: "11px 20px",
          // default drag style
          ...provided.draggableProps.style,
          // customized drag style
          ...(snapshot.isDragging ? dragItemStyle : {}),
        }}
      >
        {children(item, index, provided.dragHandleProps)}
      </DragWrap>
    )}
  </Draggable>
);

const List = ({ list, onDragEnd, dragListStyle = {}, ...props }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            ...(snapshot.isDraggingOver ? dragListStyle : {}),
          }}
        >
          {list.map((item, index) => (
            <Item key={item.id} index={index} item={item} {...props} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const QueueDnD = () => {
  const [list, setList] = React.useState(INITIAL_LIST);
  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    setList(reorder(list, source.index, destination.index));
  };

  return (
    <Wrapper>
      <div className="queue-head">
        <h2>Player queue</h2>
      </div>
      <List
        list={list}
        onDragEnd={handleDragEnd}
        dragItemStyle={{
          background: "#004fa39d",
          borderRadius: "8px",
        }}
        dragListStyle={
          {
            // background: "lightblue",
            // borderRadius: "16px",
          }
        }
      >
        {(item, index, dragHandleProps) => (
          <PlayerItem {...dragHandleProps}>
            <div className="player-info">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2009_6397)">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13H11H7V11H11H13H17V13Z"
                      fill="#004EA3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2009_6397">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <p>
                {index}. {item.name}
              </p>
            </div>
            <div>
              <DragIcon />
            </div>
          </PlayerItem>
        )}
      </List>
    </Wrapper>
  );
};

export default QueueDnD;
