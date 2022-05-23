import styled from "styled-components";

export const DisciplinaContainer = styled.div`
  background-color: #2f6195;
  width: 35rem;
  height: 20rem;
  padding: 2rem;
  border-radius: 5px;

  @media only screen and (max-width: 1442px) {
  /* For everything bigger than 768px */
    width: 32rem;
  }
  @media only screen and (max-width: 1298px) {
  /* For everything bigger than 768px */
    height: 18rem;
    width: 30rem;
  }
  @media only screen and (max-width: 1225px) {
  /* For everything bigger than 768px */
    height: 18rem;
    width: 26rem;
  }
`

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  column-gap: 5rem;
  row-gap: 2rem;
  padding-top: 1rem;
`

export const MonitoresContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 0.6rem;
  row-gap: 2rem;
  margin-top: 1rem;
  padding-bottom: 20rem;
`

export const DisciplinaTitulo = styled.p`
  font-size: 1.5rem;
`

