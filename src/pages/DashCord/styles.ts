import styled from "styled-components";

const width = window.innerWidth - 96;

export const Container = styled.div`
  position: relative;
  width:100%;
  height:100%;
`

export const Title = styled.h1`
  text-align: center;
  padding-top: 2rem;
`
export const MainContainer = styled.div`
  width: ${width}px;
  height: 100%;
  position: absolute;
  right:0;
`