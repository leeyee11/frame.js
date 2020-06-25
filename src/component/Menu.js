import React, { useState, useEfect} from 'react';
import Grid, { Col } from '../layout/Grid';
import { Box } from '../layout/Flex';

// const Container = 
const LightBtn = ({children}) => (
  <Box
    justify="center"
    txtColor="gray-200"
    cursor="pointer"
    hover={'text-white font-bold'}
  >
    {children}
  </Box>
);

const Menu = () => {

  return (
    <Box justify="center" items="center" height={64} bgColor="gray-800" shadow="md" className="px-8">
      <Grid fullwidth cols={12} >
        <Col md={9} sm={6} span={3}></Col>
        <Col md={3} sm={6} span={9}>
          <Grid fullwidth cols={3}>
            <Col span={1}>
              <LightBtn>Undo</LightBtn>
            </Col>
            <Col span={1}>
              <LightBtn>Redo</LightBtn>
            </Col>            
            <Col span={1}>
              <LightBtn>Save</LightBtn>
            </Col>
          </Grid>
        </Col>
      </Grid>
    </Box>
  )
}
export default Menu;