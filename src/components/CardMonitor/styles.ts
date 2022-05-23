import styled from "styled-components";

export const MonitorCardContainer = styled.div`
  height: 2.5rem;
  padding: 0.5rem 0.5rem;
  color: black;
  background-color: #f2f2f2;
  border-radius: 5px;
  p:nth-of-type(2n) {
    height:2rem;
    word-break: break-all;
  }
  @media only screen and (max-width: 1225px) {
    height: 5rem;
  }
`