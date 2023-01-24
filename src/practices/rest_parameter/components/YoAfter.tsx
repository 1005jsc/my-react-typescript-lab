import React from 'react';

type YoButtonProps = {
  children: React.ReactNode;
  [x: string]: any;
};

const YoButton = ({ children, ...rest }: YoButtonProps) => {
  return <button {...rest}>{children}</button>;
};
export default YoButton;
