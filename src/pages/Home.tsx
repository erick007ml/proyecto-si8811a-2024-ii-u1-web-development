import { Link } from 'react-router-dom'
import '@/background.css'
import CountdownTimer from '@/components/CountdownTimer'
const Home = () => {
  const startDate = new Date('2024-10-09T00:00:00')
  const endDate = new Date('2024-10-10T00:00:00')

  return (
    <div className='background w-screen min-h-1/2 pb-10 text-black font-sans relative'>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <div className='container mx-auto'>
        <header className='mx-auto px-4 py-6 flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <div className='absolute top-4 left-4 flex items-center space-x-2 px-12'>
              <div className='flex items-center'>
                <div className='p-2 rounded'>
                  <img
                    src='https://seeklogo.com/images/U/universidad-privada-de-tacna-logo-3E1EE39EEA-seeklogo.com.png'
                    alt='Logo Juegos Florales'
                    className='h-16 w-16 bg-transparent rounded-xl bg-white p-1'
                  />
                </div>
                <div>
                  <h3 className='text-white text-lg font-bold'>
                    Juegos Florales 2024
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:flex space-x-6 p-4 ml-4'>
            <div>
              <Link
                to='/about'
                className='text-white sm:text-xl font-semibold hover:underline transition duration-300'
              >
                Acerca de
              </Link>
            </div>
            <div>
              <Link
                to='/eventos'
                className='text-white sm:text-xl font-semibold hover:underline transition duration-300'
              >
                Eventos
              </Link>
            </div>
            <div>
              <Link
                to='/equipos'
                className='text-white sm:text-xl font-semibold hover:underline transition duration-300'
              >
                Equipos
              </Link>
            </div>
            <div>
              <Link
                to='/lugares'
                className='text-white sm:text-xl font-semibold hover:underline transition duration-300'
              >
                Lugares
              </Link>
            </div>
          </div>
        </header>

        <main className='container mx-auto px-4 py-20 md:py-10 lg:py-30 xl:py-30 2xl:py-50 text-center'>
          <div className='space-y-4 mb-12'>
            <h1 className='font-compact-black text-6xl md:text-8xl font-bold text-white uppercase tracking-widest'>
              Juegos Florales
            </h1>
            <p className='text-yellow-300 text-lg sm:text-xl md:text-2xl mt-4'>
              Evento cultural organizado por la Universidad Privada de Tacna
            </p>
          </div>
          <div className='md:flex md:flex-row justify-center gap-2'>
            <div className='flex gap-6 justify-center items-center flex-col md:flex-row'>
              <Link
                to='/eventos'
                className='mt-2 bg-white text-black px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:bg-gray-200 transition duration-300'
              >
                Enterate de los Eventos
              </Link>
            </div>
            <div className='mt-2 flex gap-6 justify-center items-center flex-col md:flex-row'>
              <Link
                to='/lugares'
                className='bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition duration-300'
              >
                Conoce las Ubicaciones
              </Link>
            </div>
          </div>
          <div className=' hidden md:flex justify-center items-center w-full mt-8'>
            <div className='w-auto'>
              <CountdownTimer
                className='text-center w-auto '
                startDate={startDate}
                endDate={endDate}
              />
            </div>
          </div>
        </main>

        <div className='flex flex-col'>
          <div className='absolute bottom-8 left-4 text-white px-4 sm:px-12'>
            <p className='text-2xl sm:text-3xl font-semibold'>¿Cuándo?</p>
            <p className='text-lg sm:text-2xl'>24 de Setiembre 2024</p>
          </div>

          <div className='absolute bottom-7 right-4 text-white flex flex-col items-center text-center px-4 sm:px-12 space-y-4 sm:space-y-0'>
            <div>
              <p className='text-xl sm:text-2xl font-semibold'>Conoce más:</p>
            </div>
            <div>
              <a
                href='https://www.facebook.com/ObunUPT/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xl sm:text-2xl underline hover:text-yellow-300 transition duration-300'
              >
                OBUN UPT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
