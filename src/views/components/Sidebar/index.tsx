import React from 'react'
import { Container, Content, Logo} from './styles'
import { FaTimes, FaUser } from 'react-icons/fa'
import {  BiSolidHome } from 'react-icons/bi'
import { IoGridSharp, IoArrowBackCircleSharp } from "react-icons/io5";
import logo from "../../../assets/logo-Teddy.png"
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Sidebar = ({active}) => {

  const closeSidebar = () => {
    active(false)
  }

  const sair = () => {
    localStorage.removeItem('nome')
    return;
  };

  return (
    <Container sidebar={active ? 'true' : 'false'}>

      <Logo>
        <img src={logo} alt="Teddy" />
      </Logo>

      <div className='content-close'>
            <IoArrowBackCircleSharp onClick={closeSidebar} />
      </div>

      <Content>
        <Link className='link' to="/" onClick={sair}> <BiSolidHome />  <div>Home</div></Link>
        <Link className='link' to="/clientes"> <FaUser />  <div>Clientes</div></Link>
        {/* <Link className='link' to="/clientes"> <IoGridSharp />  <div>Produtos</div></Link> */}
      </Content>
    </Container>
  )
}

export default Sidebar