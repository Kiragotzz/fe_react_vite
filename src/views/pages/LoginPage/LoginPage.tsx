import React, {useState, useEffect} from 'react'
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('')

  const entrar = () => {
    console.log('entrar', nome)

    if(!nome || nome == '') return

    navigate("/clientes", {state: {nome}});
  }


  return (
    <Container>
      <>
        <div className="title">Olá, seja bem-vindo!</div>

        <input value={nome} onChange={e => setNome(e.target.value)} name="nome" placeholder="Digite o seu nome:" />

        <button onClick={entrar}>Entrar</button>
      </>
    </Container>
  );
}

export default LoginPage;
