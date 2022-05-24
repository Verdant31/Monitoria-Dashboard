import styled from 'styled-components';

interface InputContainerProps {
  width: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  width: ${props => props.width};
  text-align: center;
  margin-bottom: 1.4rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 7px;
  padding-left: 0.7rem;

  border: none;
  background-color: #f2f2f2;
  border-radius: 2px;
`
export const InputLabel = styled.p`
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`

