import axios from 'axios'

export interface Cliente {
  page: number;
  id: string;
  nome: string;
  salario: string;
  empresa: string;
}

export const getClients = async (): Promise<Cliente[]> => {
  let response = await axios.get(`/api/clients`);
  return response.data;
};

export const getClientsById = async (ids: any): Promise<Cliente[]> => {
  // let response = await axios.get(`/api/clients/find-by-ids`, ids);
  // console.log('response: ', response)
  // return response.data;

  const response: any = await fetch(`/api/clients/find-by-ids`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ids),
  });
  if (!response.ok) {
    throw new Error('Failed to delete cliente');
  }
  return response
};

export const createClient = async (cliente: Cliente): Promise<Cliente> => {
  const response = await fetch(`/api/clients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cliente),
  });
  if (!response.ok) {
    throw new Error('Failed to create cliente');
  }
  return response.json();
};

export const updateClient = async (cliente: Cliente): Promise<Cliente> => {
  const response: any = await fetch(`/api/clients/${cliente.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cliente),
  });
  if (!response.ok) {
    throw new Error('Failed to update cliente');
  }
  return response
};

export const deleteClient = async (id: string): Promise<void> => {
  const response = await fetch(`/api/clients/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete cliente');
  }
};