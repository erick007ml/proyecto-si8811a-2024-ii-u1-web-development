import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import Footer from '../Footer'

const DefaultLayout = ({ children }) => (
  <div className='flex flex-col min-h-screen bg-gray-100 font-sans'>
    <Navbar
      isAuthenticated={true}
      userName='Juan'
      title='Juegos Florales'
      links={[
        { path: '/home', label: 'Inicio' },
        { path: '/about', label: 'Acerca de' },
        { path: '/eventos', label: 'Eventos' },
        { path: '/equipos', label: 'Equipos' },
        { path: '/participantes', label: 'Participantes' },
        { path: '/lugares', label: 'Lugares' },
      ]}
    />
    <main className='flex-grow'>{children}</main>
    <Footer />
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
