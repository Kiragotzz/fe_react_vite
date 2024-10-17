import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Container, Logo } from "./styles";
import Sidebar from "../Sidebar";
import logo from "../../../assets/logo-Teddy.png";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { state } = useLocation();
  let { nome } = state && state.nome ? state : { nome: false };
  const [nomeUser, setNomeUser] = useState(nome)

  useEffect(() => {
    // sempre que renderiza
    if (!nome) {
      nome = localStorage.getItem("nome");
      nome = JSON.parse(nome)
      if (!nome) {
        navigate("/");
        return;
      }
      setNomeUser(nome)
    }

    localStorage.setItem("nome", JSON.stringify(nome));
  });

  const [sidebar, setSidebar] = useState(false);
  const showSiderbar = () => setSidebar(!sidebar);

  const sair = () => {
    localStorage.removeItem('nome')
    navigate("/");
    return;
  };

  return (
    <Container>
      <div className="part-one">
        <FaBars onClick={showSiderbar}></FaBars>

        <Logo>
          <img src={logo} alt="Teddy" />
        </Logo>

        {sidebar && <Sidebar active={setSidebar} />}
      </div>

      <nav className="part-two">
        <NavLink className="link" to="/clientes">
          Clientes
        </NavLink>
        <NavLink className="link" to="/clientesSelecionados">
          Clientes Selecionados
        </NavLink>
        <div onClick={sair}>
          <a>Sair</a>
        </div>
      </nav>

      <div className="part-three">
        <span>
          Olá, <strong>{nomeUser}!</strong>
        </span>
      </div>
    </Container>
  );
}

export default Header;
