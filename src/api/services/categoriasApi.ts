import { axiosCategorias } from '../axiosInstances'

export const getCategorias = async () => {
  try {
    const response = await axiosCategorias.get('/categorias')

    return response.data
  } catch (error) {
    console.error('Error fetching equipos:', error)
    throw error
  }
}
