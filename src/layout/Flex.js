import React from 'react';
import PropTypes from 'prop-types';
import Elm from './Base/Elm';

export const Box = ({
  className = '',
  flex = true,
  grow = false,
  shrink = false,
  direction = "row", 
  justify = "inherit", 
  content = "inherit",
  items = "inherit",
  style = {},
  children,
  ...restProps
}) => (
  <Elm
    className={
      `${flex 
        ? `flex\
          ${direction ? `flex-${direction}` : ''} \
          ${grow ? 'flex-grow' : 'flex-grow-0'}
          ${shrink ? 'flex-shrink' : 'flex-shrink-0'}
          ${justify ? `justify-${justify}`: ''} \
          ${content ? `content-${content}`: ''} \
          ${items ? `items-${items}` : ''}`
        :''
      } \
      ${className}`
    }
    style={style}
    {...restProps}
  >
    {children}
  </Elm>
)

Box.propTypes = {
  grow: PropTypes.oneOf([0, 1]),
  shrink: PropTypes.oneOf([0, 1]),
  direction: PropTypes.oneOf(['row','col','row-reverse','col-reverse']),
  justify: PropTypes.oneOf(['start','center','end','between','around']),
  content: PropTypes.oneOf(['start','center','end','between','around']),
  items: PropTypes.oneOf(['start','center','end','stretch','baseline']),
  style: PropTypes.object,
  children: PropTypes.any
}