import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MainRoutes from './MainRoutes';

function App() {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    navigate("/pagina/" + searchTerm);
  }

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li>
          <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder='Digite o número da página'
            value={searchTerm}
            onChange={handleSearchChange}
            />
          <button type='submit'>Buscar</button>
        </form>
        </li>
      </ul>
    <MainRoutes />
    </>
  );
}

export default App;
