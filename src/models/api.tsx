import axios from 'axios'

export interface Cliente {
  id: number;
  nome: string;
  salario: number;
  empresa: number;
}

const API_URL = 'http://localhost:3000';

export const fetchClientes = async (): Promise<Cliente[]> => {
  let response = await axios.get(`/api/clients`);
  console.log('response: ', response)
  return response.data;
  return [
    {id: 0,nome: 'Eduardo', salario: 3500, empresa: 120000},
    {id: 1,nome: 'Eduardo', salario: 3500, empresa: 120000},
    {id: 2,nome: 'Eduardo', salario: 3500, empresa: 120000},
    {id: 3,nome: 'Eduardo', salario: 3500, empresa: 120000},
    {id: 4,nome: 'Eduardo', salario: 3500, empresa: 120000},
    {id: 5,nome: 'Eduardo', salario: 3500, empresa: 120000},
  ]
};