import { axiosEquipo } from '../axiosInstances'

export const getEquipos = async () => {
  try {
    const response = await axiosEquipo.get('/api/Equipo')

    return response.data
  } catch (error) {
    console.error('Error fetching equipos:', error)
    throw error
  }
}
