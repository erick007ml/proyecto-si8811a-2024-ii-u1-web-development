import { useEffect, useState } from 'react'
import { facultades } from '../constants/facultades'
import EventCard from '../components/EventCard'
import DefaultLayout from '../components/layouts/DefaultLayout'
import Header from '../components/Header'
import { useEventStore } from '../hooks/useEventStore'

const Home = () => {
  const [filteredEvents, setFilteredEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedFacultad, setSelectedFacultad] = useState('Todas')
  const { events, startLoadingEvents } = useEventStore()

  useEffect(() => {
    const loadEvents = async () => {
      try {
        await startLoadingEvents()
        setFilteredEvents(events)
      } catch (err) {
        console.error(err)
        setError('No se pudieron cargar los eventos')
      } finally {
        setLoading(false)
      }
    }
    loadEvents()
  }, [events])

  useEffect(() => {
    filterEvents()
  }, [selectedFacultad, events])

  const filterEvents = () => {
    let filtered = events

    if (selectedFacultad !== 'Todas') {
      filtered = filtered.filter((event) => event.facultad === selectedFacultad)
    }

    setFilteredEvents(filtered)
  }

  if (error) return <p className='text-center text-red-600 text-lg'>{error}</p>

  return (
    <DefaultLayout>
      <Header />
      <main id='events' className='flex-grow py-16 px-6'>
        <div className='container mx-auto max-w-screen-xl'>
          <h2 className='text-4xl font-semibold text-center mb-12'>
            Eventos Destacados
          </h2>

          <div className='mb-8'>
            <label htmlFor='facultad' className='mr-4'>
              Filtrar por Facultad:
            </label>
            <select
              id='facultad'
              className='border p-2 rounded'
              value={selectedFacultad}
              onChange={(e) => setSelectedFacultad(e.target.value)}
            >
              {facultades.map((facultad) => (
                <option key={facultad.abreviatura} value={facultad.abreviatura}>
                  {facultad.nombre}
                </option>
              ))}
            </select>
          </div>

          {filteredEvents.length === 0 ? (
            loading ? (
              <p className='text-center text-gray-700 text-lg'>
                Cargando eventos...
              </p>
            ) : (
              <p className='text-center text-gray-700 text-lg'>
                No hay eventos disponibles en este momento.
              </p>
            )
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12'>
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </main>
    </DefaultLayout>
  )
}

export default Home
