import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../api/services/eventoApi'
import { onLoadEvents } from '../store/event/eventSlice'

export const useEventStore = () => {
  const { events } = useSelector((state) => state.event)

  const dispatch = useDispatch()

  const startLoadingEvents = async () => {
    try {
      const eventos = await getEvents()
      dispatch(onLoadEvents(eventos))
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }

  return {
    // Propiedades
    events,
    // Metodos
    startLoadingEvents,
  }
}
