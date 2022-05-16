import React, { InputHTMLAttributes } from "react";

import { Input, InputContainer, InputLabel } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
  labelText: string;
  updateValue: (value: string) => void;
}

const MyInput = ({updateValue, labelText, width,...props}: InputProps) => {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <Input onChange={(e) => updateValue(e.target.value)} width={width} {...props} />
    </InputContainer>
  )
}
export default MyInput;