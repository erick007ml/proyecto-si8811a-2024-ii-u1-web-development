
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Eventos from './components/Eventos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </Router>
  );
}

export default App;
