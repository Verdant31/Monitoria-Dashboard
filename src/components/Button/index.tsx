import React, { ButtonHTMLAttributes } from "react";
import { text } from "stream/consumers";

import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  width: string;
  textColor?: string;
  bgColor: string;
  onClick: () => void;
}
const MyButton = ({width, textColor, bgColor, ...props}: ButtonProps) => {
  return (
    <Button textColor={textColor ? textColor : ''} bgColor={bgColor}  width={width} {...props}>
      {props.children}
    </Button>
  )
}
export default MyButton;