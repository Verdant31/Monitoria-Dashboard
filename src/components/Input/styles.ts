import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 80%;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 1.4rem;
`

export const Input = styled.input`
  width: ${(props) => props.width};

  padding: 7px;
  padding-left: 0.7rem;

  border: none;
  background-color: #f2f2f2;
  border-radius: 2px;
`
export const InputLabel = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`

