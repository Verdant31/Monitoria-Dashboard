import React from "react";

import { Button } from './styles';

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
}
const MyButton = ({...props}: ButtonProps) => {
  return (
    <Button onClick={props.onClick}>
      {props.children}
    </Button>
  )
}
export default MyButton;