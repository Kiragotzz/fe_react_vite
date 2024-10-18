import { Container, Content, Logo} from './styles'
import { FaUser } from 'react-icons/fa'
import {  BiSolidHome } from 'react-icons/bi'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import logo from "../../../assets/logo-Teddy.png"
import { Link } from "react-router-dom";

interface Props {
  active: any;
}
  // left: ${props => props.sidebar ? '0' : '-100%'};
const Sidebar = ({active}: Props) => {

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