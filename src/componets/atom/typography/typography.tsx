import React from 'react';
import TypographyPropsTypes from './type';

const Typography: React.FC<TypographyPropsTypes> = ({
  tag,
  text,
  className,
  children,
  style,
  role,
  ariaLabel,
  arialabelledby,
}) => {
  return React.createElement(
    tag,
    {
      className,
      style,
      role,
      'aria-label': ariaLabel,
      'aria-labelledby': arialabelledby,
      key: tag,  
    },
    <>
      {text}
      {children}
    </>
  );
};

export default Typography;
