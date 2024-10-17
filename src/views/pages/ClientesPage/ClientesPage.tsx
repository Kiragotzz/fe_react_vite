// import './HomePage.css'
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import { getClientes, Cliente } from '../../../controllers/clientesController';

function ClientesPage() {
  console.log('ClientesPage', )

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadClientes = async () => {
      console.log('loadClientes')
      try {
        const clientes = await getClientes();
        console.log('clientes: ', clientes)
        setClientes(clientes);
      } catch (error) {
        console.error('Error loading clientes:', error);
      } finally {
        setLoading(false);
      }
    };

    loadClientes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <><Header /><div>
      <h1>User List</h1>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>{cliente.nome} - {cliente.salario}</li>
        ))}
      </ul>
    </div></>
  );

  return ;
  
}

export default ClientesPage;
