import { axiosEvento } from '../axiosInstances'

export const getEventos = async () => {
  try {
    const response = await axiosEvento.get('/Evento')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const getEventoById = async (id: string) => {
  try {
    const response = await axiosEvento.get(`/Evento/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching event by id:', error)
    throw error
  }
}
