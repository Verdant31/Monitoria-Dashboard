import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  overflow-y: scroll;
  width: 100%;
  justify-items: center;
  row-gap: 30px;
  margin-top: 1.5rem;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1243px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const Container = styled.div`
  width: 100%;
  margin: auto;
  margin-bottom: 3rem;
`
export const GridTitle = styled.h1`
  padding-left: 4rem;
`
