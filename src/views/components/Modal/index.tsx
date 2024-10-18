import React, { useState, useEffect } from "react";
import { ModalStyle, BackgroundStyle } from "./styles";
import { FaTimes } from "react-icons/fa";
import {
  createCliente,
  updateCliente,
} from "../../../controllers/clientesController";

export default function Modal({ isOpen, setModalOpen, clienteEdit, setCloseModal }) {
  if (isOpen) {

    let idtoSet = "";
    let nometoSet = "";
    let salariotoSet = "";
    let empresatoSet = "";
    let titleSet = "Criar cliente";
    let titleButtonSet = "Criar cliente";

    if (clienteEdit && clienteEdit.id) {
      console.log("clienteEdit: ", clienteEdit);
      idtoSet = clienteEdit.id;
      nometoSet = clienteEdit.nome;
      salariotoSet = clienteEdit.salario;
      empresatoSet = clienteEdit.empresa;
      titleSet = 'Editar cliente: '
      titleButtonSet = 'Editar cliente'
    }

    const [title, setTitle] = useState(titleSet);
    const [titleButton, setTitleButton] = useState(titleButtonSet);

    const [id, setId] = useState(idtoSet);
    const [nome, setNome] = useState(nometoSet);
    const [salario, setSalario] = useState(salariotoSet);
    const [empresa, setEmpresa] = useState(empresatoSet);

    async function salvarCliente() {
      console.log("salvarCliente");

      if (!id) {
        let cliente: any = {
          nome,
          salario,
          empresa,
        };

        let resCreate = await createCliente(cliente);
        // console.log('resCreate', resCreate)
      } else {
        let cliente: any = {
          id: id,
          nome,
          salario,
          empresa,
        };

        let resUpdate = await updateCliente(cliente);
        // console.log('resUpdate', resUpdate)
      }
    }

    function fechar() {
      setId("");
      setNome("");
      setSalario("");
      setEmpresa("");
      setCloseModal({})
      setModalOpen(false);
    }

    return (
      <BackgroundStyle>
        <ModalStyle>
          <div className="header">
            {title}
            <FaTimes onClick={fechar} />
          </div>

          <input
            value={nome}
            name={nome}
            onChange={(e) => setNome(e.target.value)}
            id="nome"
            placeholder="Digite o nome:"
          />
          <input
            value={salario}
            name={salario}
            onChange={(e) => setSalario(e.target.value)}
            id="salario"
            placeholder="Digite o salário:"
          />
          <input
            value={empresa}
            name={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            id="empresa"
            placeholder="Digite o valor da empresa:"
          />

          <button onClick={salvarCliente}>{titleButton}</button>
        </ModalStyle>
      </BackgroundStyle>
    );
  }

  return null;
}

// export default Modal;
