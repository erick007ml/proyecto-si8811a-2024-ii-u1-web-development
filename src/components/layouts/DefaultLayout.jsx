import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import Footer from '../Footer'

const DefaultLayout = ({ children }) => (
  <div className='flex flex-col min-h-screen bg-gray-100 font-sans'>
    <Navbar />
    <main className='flex-grow'>{children}</main>
    <Footer />
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
