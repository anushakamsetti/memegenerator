import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  padding-top: 32px;
  padding-right:24px;
  padding-bottom:32px;
  padding-left:24px;
  @media screen and (min-with: 768px) {
      width: 85px;
      max-width: 1140px;
  }
  `
