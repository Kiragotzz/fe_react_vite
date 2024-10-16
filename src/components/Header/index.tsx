import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Container, Logo } from "./styles";
import Sidebar from '../Sidebar'
import logo from "../../assets/logo-Teddy.png"

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <FaBars onClick={showSiderbar}></FaBars>

      <Logo>
        <img src={logo} alt="Teddy" />
      </Logo>

      {sidebar && <Sidebar active={setSidebar}/>}

    </Container>
  );
}

export default Header;
