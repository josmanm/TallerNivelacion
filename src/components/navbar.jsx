import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <Link to='/micomponente'> Mi Componente</Link>
            <Link to='/micontador'> Mi Contador</Link>
            <Link to='/misproductos'> Mis Productos</Link>
            <Link to='/micontadorConReducer'> Mi contador con reducer</Link>
        </ul>
    </div>
  )
}

export default Navbar
