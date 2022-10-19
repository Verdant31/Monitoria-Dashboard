import styled from 'styled-components'

type Props = {
  height?: string
}
export const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: ${(props) => (props.height ? props.height : '100%')};
  overflow-y: scroll;
  box-sizing: content-box;
  width: 100%;
  row-gap: 60px;
  justify-items: center;
  margin-top: 1.5rem;
  padding-right: 17px;
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
  overflow: hidden;
`
export const GridTitle = styled.h1`
  padding-left: 4rem;
`
