import styled from "styled-components";

type ContainerProps = {
  isModalOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width:100%;
  height:100%;
  opacity: ${props => (props.isModalOpen ? 0.5 : 1)};
`

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`