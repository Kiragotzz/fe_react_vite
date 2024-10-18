// src/controllers/userController.ts
import { getClients, Cliente, createClient, updateClient, deleteClient, getClientsById } from '../models/api';

export const getClientes = async (): Promise<Cliente[]> => {
  try {
    const clientes = await getClients();
    return clientes;
  } catch (error) {
    throw error;
  }
};

export const getClientesById = async (ids: any): Promise<Cliente[]> => {
  try {
    const clientes = await getClientsById(ids);
    return clientes;
  } catch (error) {
    throw error;
  }
};

export const createCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response: any = await createClient(cliente);
  return response.data;
};

export const updateCliente = async (cliente: Cliente): Promise<Cliente> => {
  const response: any = await updateClient(cliente);
  return response;
};

export const deleteCliente = async (id: any): Promise<void> => {
  await deleteClient(id);
};
