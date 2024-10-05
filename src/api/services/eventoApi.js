import { axiosEvento } from '../axiosInstances'

export const getEvents = async () => {
  try {
    const response = await axiosEvento.get('/Evento')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}
