import {Routes, Route} from  'react-router-dom'
import LoginPage from './views/pages/LoginPage/LoginPage'
import ClientesPage from './views/pages/ClientesPage/ClientesPage'
import ClientesSelecionadosPage from './views/pages/ClientesSelecionadosPage/ClientesSelecionadosPage'

function MainRoutes(){
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/clientes" element={<ClientesPage/>} />
      <Route path="/clientesSelecionados" element={<ClientesSelecionadosPage/>} />
    </Routes>
  )
}

export default MainRoutes