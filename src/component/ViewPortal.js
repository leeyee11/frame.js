import React, { useState, useEfect } from 'react';
import { Box } from '../layout/Flex';
import WidgetMenu from './WidgetMenu';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from '../widget/Container';
import * as template from '../template/menu-panel-main';
const Canvas = Box;


const ViewPortal = () => {
  const [widgetMenuInfo, setWidgetMenuInfo] = useState({
    isVisible: false,
    position: [0, 0]
  });

  const [layout, setLayout] = useState(template)

  const openContextMenu = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    // const { clientX, clientY } = e.nativeEvent;
    setWidgetMenuInfo({
      isVisible: true,
      position: [offsetX, offsetY]
    });
    e.stopPropagation();
    e.preventDefault();
  }
  const closeContextMenu = () => {
    setWidgetMenuInfo({ isVisible: false })
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(destination, source);
  }

  return (
    <Box flex grow
      bgColor="gray-300"
      onClick={closeContextMenu}
    >
      <Box flex grow
        className="m-8"
        bgColor="white"
        shadow="md"
        style={{ position: 'relative' }}
        onContextMenu={openContextMenu}
      >
        <Canvas flex grow>
          <DragDropContext onDragEnd={onDragEnd}>
            <Container {...layout}/>
          </DragDropContext>
        </Canvas>
        {
          widgetMenuInfo.isVisible &&
          <WidgetMenu
            setLayout={setLayout}
            position={widgetMenuInfo.position}
          />
        }
      </Box>
    </Box>
  )
}
export default ViewPortal;