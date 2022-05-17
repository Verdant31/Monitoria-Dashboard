import styled from "styled-components";

const width = window.innerWidth - 96;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const MainContainer = styled.div`
  width: ${width}px;
  height: 100vh;
  position: absolute;
  right:0;
`