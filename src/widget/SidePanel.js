import React, { useState, useEfect} from 'react';
import NextIcon from '../asset/next.svg';
import BackIcon from '../asset/back.svg';
import { Box } from '../layout/Flex';

const Panel = Box;
const CollapseBar = Box;
const PanelContent = Box;

const FULL_WIDTH = 380;
const COLLAPSE_WITH = 20;

const SidePanel = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Panel
      direction="row"
      width={isCollapsed 
        ? COLLAPSE_WITH 
        : FULL_WIDTH}
      bgColor={'gray-200'}>
      <CollapseBar
        width={20}
        justify="center"
        items="center"
        bgColor={`gray-300`}
        hover={`bg-gray-400 text-gray-100`}
        cursor="pointer"
        userSelect="none"
        onClick={()=>setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <BackIcon/> : <NextIcon/>}
      </CollapseBar>
      <PanelContent flex grow>

      </PanelContent>
    </Panel>
  )
}
export default SidePanel;