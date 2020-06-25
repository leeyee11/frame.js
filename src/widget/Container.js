import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Box } from '../layout/Flex';

const Container = ({ id, direction, orders, children }) => (
  <Droppable droppableId={id} type="Container">
    {
      (provided) => (
        <Box flex grow
          border={`dashed`}
          minHeight={64}
          minWidth={64}
          className={`m-2`}
          direction={direction}
          ref={provided.innerRef}
          {...provided.droppableProps}
          // isDraggingOver={snapshot.isDraggingOver}
          onContextMenu={() => console.log(provided.droppableProps)}
        >
          {
            orders.map((id, index) => {
              const child = children[id];
              return (
                <Widget
                  key={child.id}
                  index={index}
                  {...child}
                />
              )
            })
          }
        </Box>
      )
    }
  </Droppable>
)

const widgetMap = {
  'Container': Container,
  'Text': Box,
  'Image': Box,
  'Box': Box,
}

const Widget = ({ id, index, type, direction, ...restProps }) => {
  const Element = widgetMap[type];
  return (
    <Draggable
      draggableId={id}
      index={index}
    >
      {(provided) => (
        <Box flex
          direction={direction}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          // isDragging={snapshot.isDragging}
        >
          <Element id={id} type={type} {...restProps} />
        </Box>
      )}
    </Draggable>
  )
}


export default Container;