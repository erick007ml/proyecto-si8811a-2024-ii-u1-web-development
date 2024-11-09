import { Evento } from '@/interfaces/Evento'
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
export const createEvento = async (evento: Evento) => {
  try {
    const response = await axiosEvento.post('/Evento', evento)
    return response.data
  } catch (error) {
    console.error('Error creating event:', error)
    throw error
  }
}

export const deleteEvento = async (id: string) => {
  try {
    const response = await axiosEvento.delete(`/Evento/${id}`)
    console.log(response, 'Evento eliminado')
    return response.data
  } catch (error) {
    console.error('Error deleting event:', error)
    throw error
  }
}

export const updateEvento = async (id: string, evento: Evento) => {
  console.log(id, evento)
  try {
    const response = await axiosEvento.put('/Evento/' + id, evento)
    console.log(response.data, 'Evento actualizado')
    return response.data
  } catch (error) {
    console.error('Error updating event:', error)
    throw error
  }
}