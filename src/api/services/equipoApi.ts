import { axiosEquipo } from '../axiosInstances'

export const getEquipos = async () => {
  try {
    const res = await axiosEquipo.get('/api/Equipo')
    return res.data
  } catch (error) {
    console.error('Error fetching equipos:', error)
    throw error
  }
}

export const getEquipoById = async (id: string) => {
  try {
    const res = await axiosEquipo.get('/api/Equipo/' + id)
    if (res.status === 200) {
      return res
    } else {
      throw new Error('Equipo no encontrado')
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching equipo:', error.message || error)
    throw new Error(
      error.response?.data?.message || 'Ocurrió un error al obtener el equipo.'
    )
  }
}

export const getParticipanteByEquipoId = async (id: string) => {
  try {
    const response = await axiosEquipo.get(`/api/Equipo/${id}/participantes`)
    return response.data
  } catch (error) {
    console.error('Error fetching participantes:', error)
    throw error
  }
}
