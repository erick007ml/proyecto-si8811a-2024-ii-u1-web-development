import { getLugares } from '@/api/services/lugaresApi'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lugares as LugaresTypes } from '@/interfaces/Lugares'
import { MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
const Lugares = () => {
  const [lugares, setLugares] = useState([])

  useEffect(() => {
    const fetchLugares = async () => {
      const data = await getLugares()
      console.log(data)
      setLugares(data)
    }
    fetchLugares()
  }, [])

  return (
    <DefaultLayout>
      <div className='container py-8'>
        <h1 className='text-4xl font-bold text-center mb-8'>Lugares</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {lugares.map((lugares: LugaresTypes) => (
            <Card key={lugares._id} className='overflow-hidden'>
              {/* <img
                src={
                  'https://www.upt.edu.pe/upt/sgc/assets/ckeditor/kcfinder/upload/images/IMG_8848%281%29.jpg'
                }
                alt={lugares.nombre_lugar}
                width={400}
                height={200}
                className='w-full object-cover h-48'
              /> */}
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <MapPin className='h-5 w-5' />
                  {lugares.nombre_lugar}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground mb-4'>
                  {lugares.descripcion}
                </p>
                <p className='text-sm font-medium mb-2'>
                  Dirección: {lugares.descripcion}
                </p>
                <div>
                  <p className='text-sm font-medium mb-1'>Categorias:</p>
                  <ul className='list-disc list-inside text-sm text-muted-foreground uppercase'>
                    {/* {lugares.events.map((event) => (
                      <li key={event}>{event}</li>
                    ))} */}
                    {lugares.id_categoria}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Lugares
