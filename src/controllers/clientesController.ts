// src/controllers/userController.ts
import { fetchClientes, Cliente } from '../models/api';

export const getClientes = async (): Promise<Cliente[]> => {
  try {
    const clientes = await fetchClientes();
    return clientes;
  } catch (error) {
    console.error('Error fetching clientes:', error);
    throw error;
  }
};
