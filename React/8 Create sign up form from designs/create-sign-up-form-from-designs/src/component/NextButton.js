import React from 'react';

export const NextButton = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  );
};

