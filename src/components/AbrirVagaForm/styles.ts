import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  background-color: #2f6195;
  border-radius: 5px;
  max-width: 750px;
  margin: auto;
`
export const FormTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 2rem 0;
  text-align: center;
`

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

interface DoubleFieldsContainerProps {
  gap: string;
}

export const DoubleFieldsContainer = styled.div<DoubleFieldsContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.gap};
  width: 100%;
  margin-bottom: 1rem;
`
export const PreRequisitosContainer = styled.div`
  display: flex;
  width: 35.1rem;
  height: 3rem;
  margin: auto;
  align-items: center;
`

export const PreRequisitoDesc = styled.p`
  font-size: 1.3rem;
`

export const SubmitButton = styled.button`
  margin-top: 2rem;
  justify-self: center;
  height: 2.3rem;
  width: 12rem;
  margin-bottom: 2rem;
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
`