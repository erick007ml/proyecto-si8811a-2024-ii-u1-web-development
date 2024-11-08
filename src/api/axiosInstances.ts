import axios from 'axios'

const axiosEvento = axios.create({
  baseURL: import.meta.env.VITE_SERVER_EVENTO,
  headers: {
    'Content-Type': 'application/json',
  },
})

const axiosEquipo = axios.create({
  baseURL: import.meta.env.VITE_SERVER_EQUIPO,
  headers: {
    'Content-Type': 'application/json',
  },
})

const axiosParticipante = axios.create({
  baseURL: import.meta.env.VITE_SERVER_PARTICIPANTE,
  headers: {
    'Content-Type': 'application/json',
  },
})
const axiosLugares = axios.create({
  baseURL: import.meta.env.VITE_SERVER_LUGARES,
  headers: {
    'Content-Type': 'application/json',
  },
})
const axiosCategorias = axios.create({
  baseURL: import.meta.env.VITE_SERVER_CATEGORIAS,
  headers: {
    'Content-Type': 'application/json',
  },
})

export {
  axiosEvento,
  axiosEquipo,
  axiosParticipante,
  axiosLugares,
  axiosCategorias,
}
