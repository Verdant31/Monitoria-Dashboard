import styled from 'styled-components'
interface Props {
  height?: string
}

export const CardContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 20rem;
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 5px;
`

export const InfosContainer = styled.div`
  height: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  bottom: 10px;
`
