import { useEffect, useState } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'
import { getEquipos } from '../api/services/equipoApi'

const Equipos = () => {
  const [equipos, setEquipos] = useState([])

  useEffect(() => {
    const fetchEquipos = async () => {
      const data = await getEquipos()
      setEquipos(data)
    }
    fetchEquipos()
  }, [])

  return (
    <DefaultLayout>
      <div className='p-6'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Equipos</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {equipos.map(({ id, nombre, detalle }) => (
            <div
              key={id}
              className='bg-white shadow-md rounded-lg p-4 transform transition duration-500 hover:scale-105'
            >
              <h3 className='text-lg font-semibold'>{nombre}</h3>
              <p className='text-gray-600'>{detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Equipos
