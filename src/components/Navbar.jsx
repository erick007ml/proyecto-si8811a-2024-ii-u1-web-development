import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className='bg-gray-800 text-white shadow-md'>
    <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
      <div className='text-2xl font-bold' data-testid='title'>
        Juegos Florales
      </div>
      <ul className='flex space-x-6'>
        <li>
          <Link to='/home' className='hover:text-yellow-400'>
            Inicio
          </Link>
        </li>
        <li>
          <Link to='/about' className='hover:text-yellow-400'>
            Acerca de
          </Link>
        </li>
        <li>
          <Link to='/eventos' className='hover:text-yellow-400'>
            Eventos
          </Link>
        </li>
        <li>
          <Link to='/equipos' className='hover:text-yellow-400'>
            Equipos
          </Link>
        </li>
        <li>
          <Link to='/participantes' className='hover:text-yellow-400'>
            Participantes
          </Link>
        </li>
        <li>
          <Link to='/lugares' className='hover:text-yellow-400'>
            Lugares
          </Link>
        </li>
        <li>
          <Link to='/login' className='hover:text-yellow-400'>
            Login
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
