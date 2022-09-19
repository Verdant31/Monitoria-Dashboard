import styled from 'styled-components'

export const DisciplinaContainer = styled.div`
  background-color: #e6e8e6;
  padding: 1.3rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: auto;
  overflow-y: scroll;
  width: 80%;
  padding-inline: 2rem;
  margin-top: 1.5rem;
`

export const MonitoresContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 3rem;
  margin-top: 1rem;
`

export const DisciplinaTitulo = styled.p`
  font-size: 1.5rem;
`
