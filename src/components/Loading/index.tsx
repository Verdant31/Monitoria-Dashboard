import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`

const Loading = () => {
  return (
    <LoadingContainer>
      <h1 style={{ textAlign: 'center' }}>Carregando...</h1>
      <ClipLoader loading={true} size={150} aria-label="Loading Spinner" />
    </LoadingContainer>
  )
}

export default Loading
