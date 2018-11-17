import React from 'react';

const Button = ({children, ...props}) => (
  <button type="button" {...props}>
    {(children && typeof children === 'function' && children()) || children}
  </button>
);

export default Button;
