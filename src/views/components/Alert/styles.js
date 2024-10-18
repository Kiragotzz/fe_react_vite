import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  color: black;
  
  display: flex;
  flex-direction: column;

  > .header {
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    font-weight: 700;
    > svg {
        cursor: pointer;
      }
  }

  > input {
    margin: 8px 0;
    padding: 8px;
    width: 360px;
    height: 40px;
    border: 1px solid #c5c5c5;
    border-radius: 4px;
  }

  > button {
    margin: 8px 0;
    width: 360px;
    height: 40px;
    border: 1px solid #EC6724;
    background-color: #EC6724;
    border-radius: 4px;
    color: white;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
  }

`

export const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0,0,0, 0.7);
  z-index: 1000;
`