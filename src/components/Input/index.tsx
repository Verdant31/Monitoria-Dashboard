import React, { InputHTMLAttributes } from "react";

import { Input, InputContainer, InputLabel } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
  labelText: string;
  updateValue: (value: string) => void;
}

const MyInput = ({updateValue, labelText, width,...props}: InputProps) => {
  return (
    <InputContainer width={width} >
      <InputLabel>{labelText}</InputLabel>
      <Input color="red" onChange={(e) => updateValue(e.target.value)} {...props} />
    </InputContainer>
  )
}
export default MyInput;