import React from 'react';
import PropTypes from 'prop-types';
import Elm from './Base/Elm';

const Col = ({
  className = '',
  span, 
  sm, 
  md, 
  lg, 
  xl, 
  gap, 
  style,
  children,
  ...restProps
}) => (
    <Elm
      className={
        `grid 
        ${span ? `grid-cols-${span}` : ''}\
        ${sm ? `sm:grid-cols-${sm}` : ''}\ 
        ${md ? `md:grid-cols-${md}` : ''}\ 
        ${lg ? `lg:grid-cols-${lg}` : ''}\ 
        ${xl ? `xl:grid-cols-${xl}` : ''}\
        ${gap ? `gap-${gap}` : ''}\
        ${className}`
      }
      style={style}
      {...restProps}
    >
      {children}
    </Elm>
  )

Col.propTypes = {
  span: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']),
  sm: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']),
  md: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']),
  lg: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']),
  xl: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']),
  gap: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.any
}

export const Grid = { Col };