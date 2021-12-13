
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Pagina from './pages/Pagina'

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/empresa" element={<Empresa />}/>
      <Route path="/contato" element={<Contato />}/>
      <Route path="/pagina/:id" element={<Pagina />}/>
    </Routes>
  )
}

export default MainRoutes
