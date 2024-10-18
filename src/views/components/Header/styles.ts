import styled from 'styled-components'

export const Container: any = styled.div`
  height: 100px;
  display: flex;
  background-color: #f1f1f1;
  box-shadow: 0 0 2px 1px;

  .part-one {
    height: 100px;
    display: flex;
    background-color: #f1f1f1;
    flex: .4;

    > svg {
      // position: fixed;
      color: grey;
      width: 30px;
      height: 30px;
      margin: 32px;
      cursor: pointer;
    }
  }

  .part-two {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    .active {
      font-weight: bold;
      color: red;
    }

    .active-path {
      font-weight: bold;
      // color: red;
    }

    div a {
      cursor: pointer;
    }

    > a {
      padding: 16px;
      text-decoration: none;
      cursor: pointer;
    }

    a, a:visited, a:hover, a:active {
      color: inherit;
    }
  }

  .part-three {
    display: flex;
    justify-content: center;
    align-items: center;
    // flex: 1;
    margin : 32px 64px;

    .name {
      font-weight: 600;
    }
  }

`

export const Logo: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  // background-color: #6a6969;
`