import React, { useState, useEfect} from 'react';
import Grid, { Col } from '../layout/Grid';
import { Box } from '../layout/Flex';
import TextIcon from '../asset/text.svg';
import ImageIcon from '../asset/image.svg';
import ButtonIcon from '../asset/button.svg';
import InputIcon from '../asset/input.svg';
import TableIcon from '../asset/table.svg';
import CardIcon from '../asset/card.svg';

const Avatar = ({
  data, 
  ...restProps
}) => (
  <Box
    flex  
    // shadow="md"
    justify="center"
    items="center"
    direction="col"
    fullwidth
    height={72}
    cursor={'pointer'}
    hover={'font-bold'}
    {...restProps}
  >
    {data.icon}
    {data.name}
  </Box>
);

const avatarSide = { width: 24, height: 24}

const defaultList = [{
  name: 'text',
  icon: <TextIcon {...avatarSide}/>
},{
  name: 'image',
  icon: <ImageIcon {...avatarSide}/>
},{
  name: 'button',
  icon: <ButtonIcon {...avatarSide}/>
},{
  name: 'input',
  icon: <InputIcon {...avatarSide}/>
},{
  name: 'table',
  icon: <TableIcon {...avatarSide}/>
},{
  name: 'card',
  icon: <CardIcon {...avatarSide}/>
}]

const WidgetMenu = ({position}) => {
  const [allWidgets, setAllWidgets] = useState(defaultList);

  return (
    <Box flex grow
      className="m-4"
      shadow="lg"
      position={`absolute`}
      width={240}
      maxHeight={360}
      left={position[0]} 
      top={position[1]}
      bgColor={`white`}
    >
      <Grid fullwidth cols={3} gap={4}>
        {
          allWidgets.map((w) => (
            <Avatar data={w} span={1}/>
          ))
        }
      </Grid>
    </Box>
  )
}
export default WidgetMenu;