import {Routes, Route} from  'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'

function MainRoutes(){
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/clientes" element={<HomePage/>} />
    </Routes>
  )
}

export default MainRoutes