import styled from 'styled-components'

export const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  div {
    padding: 6px;
    
  }

  .title{ 
    color: #000000;
    font-size: 36px;
  }

  input {
    margin: 8px;
    // background-color: red;
    border-radius: 2px;
    padding: 2px 6px;
    border: 1px solid #f1f1f1;
    width: 520px;
    height: 34px;
    font-size: 24px;
  }

  button {
    width: 520px;
    height: 34px;
    font-size: 24px;
    background-color: #EC6724;
    border-radius: 2px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 700;
  }
`