import React from 'react';
import PropTypes from 'prop-types';
import './Elm.css';

const Elm = ({
  className = '',
  bgColor,
  txtColor,
  txtSize,
  txtAlign,
  height,
  minHeight,
  maxHeight,
  width,
  minWidth,
  maxWidth,
  cursor,
  userSelect,
  hover,
  shadow,
  style,
  fullwidth,
  position,
  left,
  right,
  top,
  bottom,
  border,
  children,
  ...restProps
}) => (
    <div
      className={
        `Elm \
        ${txtColor ? `text-${txtColor}` : '' }\
        ${bgColor ? `bg-${bgColor}` : '' }\
        ${shadow ? `shadow-${shadow}` : ''}\
        ${hover ? hover.split(' ').map(c => `hover:${c}`).join(' ') : ''}\
        ${fullwidth ? 'w-full' : ''}\
        ${txtSize ? `text-${txtSize}` : ''}\
        ${txtAlign ? `text-${txtAlign}` : ''}\
        ${border? `border-${border} border` : ''}\
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
        position,
        left,
        right,
        top,
        bottom,
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