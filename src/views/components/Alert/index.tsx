import { useState } from "react";
import { ModalStyle, BackgroundStyle } from "./styles";
import { FaTimes } from "react-icons/fa";
import {
  deleteCliente
} from "../../../controllers/clientesController";

interface Props {
  isOpen: boolean;
  setAlertOpen: () => void;
  cliente: any;
  setClienteToRemove: () => void;
}

function Alert({ isOpen, setAlertOpen, cliente }:Props) {
  if (isOpen) {
    let nometoSet = "";

    if(cliente.id){
      nometoSet = cliente.nome
    }
    const [nome, setNome] = useState(nometoSet);

    function fechar() {
      setNome('')
      setAlertOpen();
    }

    async function removeConfirm() {
      let id = cliente.id
      await deleteCliente(id);
      setAlertOpen();
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
