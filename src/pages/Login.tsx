import { FaGoogle, FaMicrosoft } from 'react-icons/fa'
import background from '../assets/background_recomprimido.webp'
import logoJuegosFlorales from '../assets/logo-juegosflorales.png'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/hooks/useAuthStore'

const Login = () => {
  const navigate = useNavigate()
  const { loginWithMicrosoft } = useAuthStore()

  const handleLoginWithMicrosoft = () => {
    // window.location.href = 'http://localhost:5000/login'}
    loginWithMicrosoft()
    navigate('/')
  }
  const handleLoginWithGoogle = () => {
    // window.location.href = 'http://localhost:5000/login'}
    loginWithMicrosoft()
    navigate('/')
  }

  return (
    <div
      className='relative flex items-center justify-center h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='absolute inset-0 bg-black opacity-30'></div>

      <div className='relative w-full max-w-sm bg-white shadow-md rounded-lg p-6 z-10'>
        <div className='flex justify-center mb-4'>
          <img
            src={logoJuegosFlorales}
            alt='Logo'
            className='w-24 h-24 rounded-full object-cover'
          />
        </div>
        <h1 className='text-2xl font-bold text-center mb-4'>Login</h1>
        <p className='text-center mb-4 text-gray-600'>
          Ingresa haciendo uso del correo otorgado por la Universidad.
        </p>
        <button
          className='w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300'
          onClick={handleLoginWithMicrosoft}
        >
          <FaMicrosoft size={24} />
          Iniciar con Microsoft
        </button>
        <button
          className='mt-2 w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors duration-300'
          onClick={handleLoginWithGoogle}
        >
          <FaGoogle size={24} />
          Iniciar con Google
        </button>
      </div>

      <a
        href='https://www.upt.edu.pe/upt/web/index.php'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute bottom-4 left-4 text-black underline hover:text-gray-700 z-10'
      >
        Universidad Privada de Tacna
      </a>
    </div>
  )
}

export default Login
