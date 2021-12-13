import { useParams } from 'react-router-dom'

function Pagina() {
  const { id } = useParams() 

  return (
    <div>
      <h1>Pagina {id} </h1>
    </div>
  )
}

export default Pagina
