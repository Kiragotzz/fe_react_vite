// import './HomePage.css'
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal/index";
import Alert from "../../components/Alert/index";
import { Container, Content, Card } from "./styles";
import {  getClientes, Cliente } from "../../../controllers/clientesController";

import { FaPlus } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";

function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [clienteRemove, setClienteRemove] = useState({});
  
  const [modalEdit, setModalEdit] = useState({});
  const [countClientes, setCountClientes] = useState(0)

  const [selecionados, setSelecionados] = useState<string[]>([]);
  const [selecionadosToSend, setSelecionadosToSend] = useState<string[]>([]);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(16);
  const [paginationNumbers, setPaginationNumbers] = useState([]);

  const loadClientes = async () => {
    console.log("loadClientes");
    try {
      const clientes = await getClientes();
      return clientes;
    } catch (error) {
      console.error("Error loading clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    start();
  }, []);

  async function start() {
    let resClientes: any = await loadClientes();

    let length = resClientes.length;
    setCountClientes(length)
    let paginationNumbers1: any = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      paginationNumbers1.push(i);
    }

    let count = 1;
    let page = 1;

    for (let i = 1; i <= length; i++) {
      if (count <= postsPerPage) {
        resClientes[i - 1].page = page;
        count++;
      }
      if (count > postsPerPage) {
        page++;
        count = 1;
      }
    }

    setClientes(resClientes);
    setPaginationNumbers(paginationNumbers1);
  }

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const select = (id: string) => {
    setSelecionados((prevSelecionados) =>
      prevSelecionados.includes(id) ? prevSelecionados.filter((clienteId) => clienteId !== id): [...prevSelecionados, id]
    );

    let atual = clientes.filter(e=>e.id == id)
    let lista = selecionadosToSend.concat()
    let newLista = atual.concat(lista)
    setSelecionadosToSend(newLista)
  };
  async function edit(cliente: any) {
    setModalEdit(cliente)
    setOpenModal(true)
  }
  async function remove(cliente: any) {
    setClienteRemove(cliente)
    setOpenAlert(true)
  }

  return (
    <>
      <Header selecionados={selecionadosToSend} />
      <div>
        <Container>

          <div className="infos-clientes">
            <div className="encontrados"><strong>{countClientes}</strong> clientes encontrados:</div>
            <div className="clientes-pagina">Clientes por página {postsPerPage}</div>
          </div>

          <Content>
            {clientes
              .filter((e) => e.page == currentPage)
              .map((cliente) => (
                <Card key={cliente.id}>
                  <div className="content-one">
                    <div className="nome">{cliente.nome}</div>
                    <div className="salario">Salário: {cliente.salario}</div>
                    <div className="empresa">Empresa: {cliente.empresa}</div>
                  </div>
                  <div className="content-two">
                    <div
                      className="select"
                      value={cliente}
                      onClick={() => select(cliente.id)}
                    >
                      {selecionados.includes(cliente.id) ? <FaCirclePlus />:<FaPlus />}
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
                    </div>
                  </div>
                </Card>
              ))}
          </Content>

          <button className="button-criar" onClick={() => setOpenModal(true)}>
            Criar cliente
          </button>

          <Modal
            isOpen={openModal}
            clienteEdit={modalEdit}
            setModalOpen={() => setOpenModal(!openModal)}
            setCloseModal={() => setModalEdit({})}
          ></Modal>

          <Alert
            isOpen={openAlert}
            setAlertOpen={() => {setOpenAlert(!openAlert);start()}}
            cliente={clienteRemove}
            setClienteToRemove={() => setClienteRemove({})}
            ></Alert>

          <div className="pagination">
            {paginationNumbers.map((pageNumber: any) => (
              <button
                key={pageNumber}
                className={currentPage === pageNumber ? "active-page" : ""}
                onClick={() => handlePagination(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </>
  );

  return;
}

export default ClientesPage;
