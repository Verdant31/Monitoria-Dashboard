import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  // Inicio da gambiarra para centralizar o modal
  left: 50%;
  top: 50%;
  margin-left: -12rem;
  margin-top: -8.25rem;
  // Fim da gambiarra para centralizar o modal

  width: 30rem;
  height: 16.5rem;

  border-radius: 5px;
  background-color: white;

  h1 {
    margin: 1rem;
    margin-left: 1.5rem;
    color: #303030;
  }
  div {
    text-align: center;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  margin-top: 0.5rem;
  width: 100%;
  button {
    border-radius: 0 0 5px 5px;
  }
`

export const Input = styled.textarea`
  width: 85%;
  height: 6rem;
  border-radius: 1px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  padding: 0.6rem;
  border: 1px solid;
`
