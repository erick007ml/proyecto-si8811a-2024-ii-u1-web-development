import PropTypes from 'prop-types'

const EventCard = ({ event }) => (
  <div className='bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-gray-200'>
    <h3 className='text-2xl font-semibold mb-4 text-purple-800'>
      {event.nombre || 'Nombre del Evento'}
    </h3>
    <p className='text-gray-700 mb-2'>
      <strong className='text-purple-600'>Fecha Inicio:</strong>{' '}
      {new Date(event.fechaInicio).toLocaleDateString()}
    </p>
    <p className='text-gray-700 mb-2'>
      <strong className='text-purple-600'>Fecha Término:</strong>{' '}
      {new Date(event.fechaTermino).toLocaleDateString()}
    </p>
    <p className='text-gray-700 mb-2'>
      <strong className='text-purple-600'>Facultad:</strong>{' '}
      {event.facultad || 'No especificada'}
    </p>
  </div>
)

EventCard.propTypes = {
  event: PropTypes.shape({
    nombre: PropTypes.string,
    fechaInicio: PropTypes.string.isRequired,
    fechaTermino: PropTypes.string.isRequired,
    facultad: PropTypes.string,
  }).isRequired,
}

export default EventCard
