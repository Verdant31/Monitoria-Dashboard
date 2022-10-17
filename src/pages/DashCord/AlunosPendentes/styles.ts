import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  justify-items: center;
  row-gap: 30px;
  margin-top: 1.5rem;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1243px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
