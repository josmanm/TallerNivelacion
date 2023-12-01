import {Link} from 'react-router-dom'
import MiComponente from './MiComponente'
import MiContador from './MiContador'
import MisProductos from './MisProductos'
function Navbar() {
  return (
    <div>
        <ul>
            <Link to='/micomponente'> Mi Componente</Link>
            <Link to='/micontador'> Mi Contador</Link>
            <Link to='/misproductos'> Mis Productos</Link>
        </ul>
    </div>
  )
}

export default Navbar
