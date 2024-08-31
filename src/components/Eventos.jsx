import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Eventos = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:50995/evento');
        setEvents(response.data);
      } catch (err) {
        setError('No se pudieron cargar los eventos');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p className="text-center text-gray-700 text-lg">Cargando eventos...</p>;
  if (error) return <p className="text-center text-red-600 text-lg">{error}</p>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <nav className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Juegos Florales</div>
          <ul className="flex space-x-6">
            <li><a href="#events" className="hover:text-yellow-400">Eventos</a></li>
            <li><a href="#about" className="hover:text-yellow-400">Acerca de</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-purple-800 to-indigo-600 text-white text-center py-16">
        <div className="container mx-auto px-6">
          <h1 id="title-id" className="text-5xl font-extrabold mb-4">Juegos Florales</h1>
          <p className="text-xl mb-6">Celebrando la creatividad y la excelencia en las artes.</p>
          <a href="#events" className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 py-3 px-8 rounded-full text-lg font-semibold transition-transform transform hover:scale-105">Ver Eventos</a>
        </div>
      </header>

      <main id="events" className="flex-grow py-16 px-6">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="text-4xl font-semibold text-center mb-12">Eventos Destacados</h2>

          {events.length === 0 ? (
            <p className="text-center text-gray-700 text-lg">No hay eventos disponibles en este momento.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
              {events.map(event => (
                <div key={event.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-800">{event.nombre || 'Nombre del Evento'}</h3>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-purple-600">Fecha Inicio:</strong> {new Date(event.fechaInicio).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-purple-600">Fecha Término:</strong> {new Date(event.fechaTermino).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-purple-600">Facultad:</strong> {event.facultad || 'No especificada'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-8">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Juegos Florales. Todos los derechos reservados. | @SistemasUPT</p>
        </div>
      </footer>
    </div>
  );
};

export default Eventos;
