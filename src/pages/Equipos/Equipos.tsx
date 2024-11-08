import { getEquipos } from '@/api/services/equipoApi'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Skeleton } from '@/components/Skeleton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Equipo } from '@/interfaces/Equipo'
import { Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Equipos = () => {
  const [equipos, setEquipos] = useState<Equipo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchEquipos = async () => {
      try {
        const data = await getEquipos()
        setEquipos(data)
      } catch (err) {
        console.error(err)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 800)
    }
    fetchEquipos()
  }, [])

  return (
    <DefaultLayout>
      <div className='p-6'>
        <div className='container mx-auto py-8'>
          <h1 className='text-3xl font-bold text-center mb-8'>Equipos</h1>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} index={index} />
                ))
              : equipos.map((team) => (
                  <Card key={team.id} className='flex flex-col'>
                    <CardHeader>
                      <CardTitle className='text-xl font-bold'>
                        {team.nombre}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                      <p className='text-muted-foreground mb-4'>
                        {team.detalle}
                      </p>
                      <div className='flex items-center gap-2'>
                        <Users className='h-5 w-5 text-muted-foreground' />
                        <span className='font-medium'>
                          {team.participantes.filter((p) => p !== '').length}{' '}
                          participantes
                        </span>
                      </div>
                    </CardContent>
                    <Link to={`/equipos/${team.id}`}>
                      <div className='px-6 pb-4'>
                        <Badge
                          variant='secondary'
                          className='w-full justify-center text-sm py-1 transition-transform duration-200 ease-in-out hover:scale-105'
                        >
                          Ver detalles
                        </Badge>
                      </div>
                    </Link>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Equipos
