import React from 'react';
import './button.scss';

const Button = ({href, children, ...props}) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag {...props} href={href && href}>
      {children && typeof children === 'function' ? children() : children}
    </Tag>
  );
};

export default Button;
