import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Eventos from './pages/Eventos'
import Equipos from './pages/Equipos'
import Ubicaciones from './pages/Ubicaciones'
import Participantes from './pages/Participantes'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/equipos' element={<Equipos />} />
        <Route path='/participantes' element={<Participantes />} />
        <Route path='/ubicaciones' element={<Ubicaciones />} />
      </Routes>
    </Router>
  )
}

export default App
