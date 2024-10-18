// import './HomePage.css'
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getClientesById,
  Cliente,
} from "../../../controllers/clientesController";
import { Container, Content, Card } from "./styles";

function ClientesSelecionadosPage() {
  const location = useLocation();
  const { selecionados } = location.state as { selecionados: any[] };
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [qtdClientesSelecionados, setQtdClientesSelecionados] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    start();
  }, []);

  async function start() {
    setClientes(selecionados);
    setQtdClientesSelecionados(selecionados.length);
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  function limparSelecao() {
    setClientes([]);
    setQtdClientesSelecionados(0);
  }

  return (
    <>
      <Header selecionados={undefined} />
      <Container>
        <div className="infos-clientes">
          <div className="clientes-pagina">
            <strong>Clientes selecionados:</strong> {qtdClientesSelecionados}
          </div>
        </div>
        <Content>
          {clientes.map((cliente) => (
            <Card key={cliente.id}>
              <div className="content-one">
                <div className="nome">{cliente.nome}</div>
                <div className="salario">Salário: {cliente.salario}</div>
                <div className="empresa">Empresa: {cliente.empresa}</div>
              </div>
              <div className="content-two">
                {/* <div
                className="select"
                value={cliente}
                onClick={() => select(cliente.id)}
              >
                {selecionados.includes(cliente.id) ? <FaCirclePlus /> : <FaPlus />}
              </div>
              <div
                className="edit"
                value={cliente}
                onClick={() => edit(cliente)}
              >
                <MdOutlineEdit />
              </div>
              <div
                className="remove"
                value={cliente}
                onClick={() => remove(cliente)}
              >
                <GoTrash />
              </div> */}
              </div>
            </Card>
          ))}
        </Content>
        <button className="button-criar" onClick={() => limparSelecao()}>
          Limpar clientes selecionados
        </button>
      </Container>
    </>
  );
}

export default ClientesSelecionadosPage;
