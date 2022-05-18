import styled from 'styled-components';

interface ButtonProps {
  width: string;
  bgColor: string;
  textColor: string;
}

export const Button = styled.button<ButtonProps>`
  height: 2.5rem;
  width: ${(props) => props.width};
  font-family: 'Roboto';
  font-weight: 500;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.bgColor};
  font-size: 1.2rem;
  border: none;
`;