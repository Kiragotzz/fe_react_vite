import React, { useState, useEffect } from "react";
import { ModalStyle, BackgroundStyle } from "./styles";
import { FaTimes } from "react-icons/fa";
import {
  createCliente,
  updateCliente,
  deleteCliente
} from "../../../controllers/clientesController";

function Alert({ isOpen, setAlertOpen, cliente, setClienteToRemove }) {
  if (isOpen) {
    let nometoSet = "";

    if(cliente.id){
      nometoSet = cliente.nome
    }
    const [nome, setNome] = useState(nometoSet);

    function fechar() {
      setNome('')
      setAlertOpen(false);
    }

    async function removeConfirm() {
      let id = cliente.id
      await deleteCliente(id);
      setAlertOpen(false);
    }

    return (
      <BackgroundStyle>
        <ModalStyle>
          <div className="header">
            Excluir cliente:
            <FaTimes onClick={fechar} />
          </div>
          Voce está prestes a excluir o cliente: <strong>{nome}</strong>

          <button onClick={removeConfirm}>Excluir cliente</button>
        </ModalStyle>
      </BackgroundStyle>
    );
  }

  return null;
}

export default Alert;
