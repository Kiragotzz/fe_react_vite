import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #f1f1f1;
  box-shadow: 0 0 20px 3px;

  > svg {
    // position: fixed;
    color: grey;
    width: 30px;
    height: 30px;
    margin: 32px;
    cursor: pointer;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  // background-color: #6a6969;
`