import { axiosLugares } from '../axiosInstances'

export const getLugares = async () => {
  try {
    const response = await axiosLugares.get('/lugares')

    return response.data
  } catch (error) {
    console.error('Error fetching equipos:', error)
    throw error
  }
}
