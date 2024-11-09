import { axiosParticipante } from '../axiosInstances'

export const getParticipantes = async () => {
  try {
    const response = await axiosParticipante.get('/api/Participante')
    console.log(response.data)

    return response.data
  } catch (error) {
    console.error('Error fetching participantes:', error)
    throw error
  }
}
