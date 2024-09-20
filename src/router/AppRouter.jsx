import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from '../hooks/useAuthStore'
import { useEffect } from 'react'
import Login from '../pages/Login'
import Eventos from '../pages/Eventos'
import Equipos from '../pages/Equipos'
import Participantes from '../pages/Participantes'
import Home from '../pages/Home'
import About from '../pages/About'
import Lugares from '../pages/Lugares'

function AppRouter() {
  const { status, checkAuthToken } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return <h3>Cargando...</h3>
  }

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          <Route path='/auth/*' element={<Login />} />
          <Route path='/*' element={<Navigate to='/auth/login' />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/eventos' element={<Eventos />} />
          <Route path='/equipos' element={<Equipos />} />
          <Route path='/participantes' element={<Participantes />} />
          <Route path='/lugares' element={<Lugares />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </>
      )}
    </Routes>
  )
}

export default AppRouter
