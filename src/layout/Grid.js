import React from 'react';
import PropTypes from 'prop-types';
import Elm from './Base/Elm';

const Grid = ({
  cols,
  rows,
  gap, 
  style,
  children,
  ...restProps
}) => (
  <Elm
    className={
      `grid \
      ${cols ? `grid-cols-${cols}` : ''}\
      ${rows ? `grid-rows-${cols}` : ''}\
      ${gap ? `gap-${gap}` : ''}`
    }
    style={style}
    {...restProps}
  >
    {children}
  </Elm>
)

export const Col = ({
  className = '',
  span,
  xs, 
  sm, 
  md, 
  lg, 
  xl, 
  style,
  children,
  ...restProps
}) => (
    <Elm
      className={
        ` ${span ? `col-span-${span}` : ''}\
        ${xs ? `xs:col-span-${xs}` : ''}\ 
        ${sm ? `sm:col-span-${sm}` : ''}\ 
        ${md ? `md:col-span-${md}` : ''}\ 
        ${lg ? `lg:col-span-${lg}` : ''}\ 
        ${xl ? `xl:col-span-${xl}` : ''}\
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

export default Grid;