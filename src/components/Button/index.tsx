import React, { ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  width: string
  textColor?: string
  bgColor: string
  onClick?: () => void
}
// eslint-disable-next-line react/display-name
const MyButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button ref={ref} textColor={props.textColor || ''} {...props}>
        {props.children}
      </Button>
    )
  },
)
export default MyButton
