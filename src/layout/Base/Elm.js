import React from 'react';
import PropTypes from 'prop-types';
import './Elm.css';

const Elm = ({
  className = '',
  bgColor,
  txtColor,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  cursor,
  userSelect,
  hover,
  style,
  children,
  ...restProps
}) => (
    <div
      className={
        `Elm \
        ${txtColor ? `text-${txtColor}` : '' }\
        ${bgColor ? `bg-${bgColor}` : '' }\
        ${hover ? hover.split(' ').map(c => `hover:${c}`).join(' ') : ''}\
        ${className}`
      }
      style={{
        height,
        minHeight,
        maxHeight,
        width,
        minWidth,
        maxWidth,
        cursor,
        userSelect,
        ...style
      }}
      {...restProps}
    >
      {children}
    </div>
  )

Elm.propTypes = {
  children: PropTypes.any
}

export default Elm;