import React, { InputHTMLAttributes } from 'react'

import { Input, InputContainer, InputLabel } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: string
  labelText: string
}

const MyInput = ({ labelText, width, ...props }: InputProps) => {
  return (
    <InputContainer width={width}>
      <InputLabel>{labelText}</InputLabel>
      <Input color="red" {...props} />
    </InputContainer>
  )
}
export default MyInput
