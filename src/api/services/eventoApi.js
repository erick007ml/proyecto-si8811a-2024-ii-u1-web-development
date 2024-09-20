import { axiosEvento } from '../axiosInstances'

export const getEventos = async () => {
  const response = await axiosEvento.get('/Evento')
  return response.data
}
