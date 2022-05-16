import React from "react";

import { Input } from './styles';

interface InputProps {
  children?: React.ReactNode;
  placeHolder: string;
}

const MyInput = ({...props}: InputProps) => {
  return (
    <Input placeholder={props.placeHolder}>
      {props.children}
    </Input>
  )
}
export default MyInput;