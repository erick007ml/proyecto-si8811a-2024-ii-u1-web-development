import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({
  isAuthenticated,
  userName,
  title = 'Juegos Florales',
  links = [],
}) => {
  const [showLogout, setShowLogout] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className='bg-gray-900 text-white shadow-md'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <div
            className='text-3xl font-bold transition-transform transform hover:scale-110'
            data-testid='title'
          >
            {title}
          </div>
        </div>
        <div className='hidden md:flex space-x-4 md:space-x-6'>
          {links.map((link) => (
            <li key={link.path} className='list-none'>
              <Link
                to={link.path}
                className='relative inline-block transition-transform transform hover:scale-105'
              >
                <span className='hover:text-yellow-400 transition duration-200'>
                  {link.label}
                </span>
                <span className='absolute left-0 right-0 bottom-0 h-1 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100' />
              </Link>
            </li>
          ))}
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='focus:outline-none'
          >
            <svg
              className='w-8 h-8 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
        {isAuthenticated ? (
          <div
            className='ml-4 flex items-center relative'
            onMouseEnter={() => setShowLogout(true)}
            onMouseLeave={() => setShowLogout(false)}
          >
            <div className='flex items-center justify-center h-12 w-12 bg-gray-700 rounded-full text-white font-semibold hover:bg-gray-600 transition transform hover:scale-105'>
              {userName.charAt(0).toUpperCase()}
            </div>
            {showLogout && (
              <button
                onClick={() => {
                  console.log('User logged out')
                }}
                className='absolute left-1/2 transform -translate-x-1/2 -translate-y-0 bg-red-600 text-white px-4 py-2 rounded shadow-lg hover:bg-red-700 transition duration-200 ease-in-out'
              >
                Salir
              </button>
            )}
          </div>
        ) : (
          <span className='ml-4 text-lg hover:text-yellow-400 transition'>
            Sign In
          </span>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className='md:hidden bg-gray-800 py-4'>
          <ul className='flex flex-col space-y-2 px-6 list-none'>
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className='block text-center hover:text-yellow-400 transition duration-200'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Navbar
