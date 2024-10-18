import styled from 'styled-components'

export const Container = styled.div`
  // margin: 16px;
  padding: 0 36px;

  > .infos-clientes{
    padding: 16px 16px 0 16px;
    display: flex;
    justify-content: space-between;

    >encontrados{}
    >clientes-pagina{}
  }

  > .button-criar {
    margin: 0 15px;
    display: flex;
    width: -webkit-fill-available;
    background-color: unset;
    border-radius: 4px;
    color: #EC6724;
    border: 2px solid #EC6724;
    justify-content: center;
    cursor: pointer;
    height: 40px;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
  }

  > .pagination {
    margin: 15px;
    display: flex;
    width: -webkit-fill-available;
    background-color: unset;
    border-radius: 4px;
    color: #EC6724;
    cursor: pointer;
    height: 40px;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    gap: 16px;
    justify-content: center;

    > .active-page{
      background-color: #EC6724;
      color: white;
    }

    > button {
      width: 35px;
      height: 35px;
      border: none;
      background-color: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 14px;
  }
  }
`

export const Content = styled.div`
  padding: 16px;
  border-radius: 4px;
  // border: 2px solid red;
  display: grid;
  /* justify-items: center; */
  /* gap: 16px; */
  // grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(258px, 1fr));
  max-width: 1380px;
`

export const Card = styled.div`
  // margin: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  min-height: 138px;

  > .content-one {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;

    > .nome {
      font-weight: 700;
    }
  }

  > .content-two {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > .select {
      cursor: pointer;
    }
    > .edit {
      cursor: pointer;
    }
    > .remove {
      color: #EC6724;
      cursor: pointer;
    }
  }
`