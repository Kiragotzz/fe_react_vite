import styled from 'styled-components';

export const Container: any = styled.div`
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 260px;;

  animation: showSidebar .4s;
  // transition: left 2.9s ease-in-out;

    > .content-close {
      position: absolute;
      left: calc(260px - 21px);
      top: calc(100px - 21px);
      animation: showClose .4s;
      background-color: black;
      border-radius: 50%;
      height: 42px;
      width: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      > svg {
        color: white;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
    }
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 260px;
    }
  }

  @keyframes showClose {
    from {
      opacity: 0;
      width: 0;
      left: 0;
      top: calc(100px - 21px);
    }
    to {
      opacity: 1;
      left: calc(260px - 21px);
      top: calc(100px - 21px);
    }
  }
`;

export const Content: any = styled.div`
  // margin-top: 100px;

  .link {
    cursor: pointer;
    color: black;
    margin: 32px;
    font-size: 22px;
    display: flex;
    text-decoration: none;

    > div {
      margin-left: 16px;
    }
  }
`;

export const Logo: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #6a6969;
`