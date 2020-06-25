import React, {useState, useEffect} from 'react';
import { Box } from './layout/Flex';
import Menu from './component/Menu';
import SidePanel from './component/SidePanel';
import ViewPortal from './component/ViewPortal';
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
