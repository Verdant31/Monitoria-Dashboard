import styled from 'styled-components'

export const MonitorCardContainer = styled.div`
  padding: 0.8rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: row !important;
  background-color: #418dde;
  border-radius: 5px;
  white-space: nowrap;

  p:nth-of-type(2n) {
    word-break: break-all;
  }
  @media only screen and (max-width: 1225px) {
    height: 5rem;
  }
`
