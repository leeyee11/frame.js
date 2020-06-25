import React, { useState, useEfect} from 'react';
import NextIcon from '../asset/next.svg';
import { Box } from '../layout/Flex';

const Panel = Box;

const CollapseBar = ({isCollapsed, onClick, children}) => (
  <Box
    width={20}
    justify="center"
    items="center"
    bgColor={`gray-400`}
    shadow="md"
    hover={`bg-gray-400 text-gray-100`}
    cursor="pointer"
    userSelect="none"
    onClick={onClick}
  >
    <NextIcon className={`${isCollapsed ? 'transform rotate-180': ''}`}></NextIcon>
  </Box>
);

const ConfigTitle = ({onClick, children}) => (
  <Box
    fullwidth
    justify="center"
    items="center"
    txtSide="base"
    height={32}
    bgColor="gray-300"
    cursor="pointer"
    shadow="sm"
    hover={'font-bold'}
    onClick={onClick}
  >
    {children}
  </Box>
)
const PanelContent = Box;
const ConfigGroup = Box;
const ConfigContent = Box;

const FULL_WIDTH = 340;
const COLLAPSE_WITH = 20;

const SidePanel = () => {
  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [configIdx, setConfigIdx] = useState(0);

  return (
    <Panel
      direction="row"
      width={isCollapsed 
        ? COLLAPSE_WITH 
        : FULL_WIDTH}
      bgColor={'gray-200'}
      >
      <CollapseBar isCollapsed={isCollapsed} onClick={()=>setIsCollapsed(!isCollapsed)}/>
      <PanelContent flex grow direction="col">
        <ConfigGroup flex direction="col" grow={configIdx === 0} shrink={configIdx !== 0}>
          <ConfigTitle onClick={()=>setConfigIdx(0)}>
            Properties
          </ConfigTitle>
          <ConfigContent flex grow shrink>

          </ConfigContent>
        </ConfigGroup>
        <ConfigGroup flex direction="col" grow={configIdx === 1} shrink={configIdx !== 1}>
          <ConfigTitle onClick={()=>setConfigIdx(1)}>
            Data Source
          </ConfigTitle>
          <ConfigContent flex grow shrink >
          </ConfigContent>
        </ConfigGroup>
      </PanelContent>
    </Panel>
  )
}
export default SidePanel;