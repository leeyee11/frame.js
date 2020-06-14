import React, {useState, useEffect} from 'react';
import { Box } from './layout/Flex';
import Menu from './widget/Menu';
import SidePanel from './widget/SidePanel';
import ViewPortal from './widget/ViewPortal';
import './App.css';


function App() {

  return (
    <div className="App">
      <Box direction="col" height={'100vh'}>
        <Menu />
        <Box direction="row" justify="center" flex grow>
          <ViewPortal />
          <SidePanel />
        </Box>
      </Box>
    </div>
  );
}

export default App;
