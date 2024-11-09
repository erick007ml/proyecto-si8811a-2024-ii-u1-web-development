import { useAuthStore } from '@/hooks/useAuthStore'
import About from '@/pages/About'
import Equipo from '@/pages/Equipos/Equipo/Equipo'
import Equipos from '@/pages/Equipos/Equipos'
import AgregarEvento from '@/pages/Eventos/AgregarEvento'
import EditarEvento from '@/pages/Eventos/EditarEvento'
import Evento from '@/pages/Eventos/Evento/Evento'
import Eventos from '@/pages/Eventos/Eventos'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Lugares from '@/pages/Lugares'
import Participantes from '@/pages/Participantes'
import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

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
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/eventos' element={<Eventos />} />
      <Route path='/eventos/agregar' element={<AgregarEvento />} />
      <Route path='/eventos/editar/:id' element={<EditarEvento />} />
      <Route path='/eventos/:id' element={<Evento />} />
      <Route path='/equipos' element={<Equipos />} />
      <Route path='/equipos/:id' element={<Equipo />} />
      <Route path='/participantes' element={<Participantes />} />
      <Route path='/lugares' element={<Lugares />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default AppRouter