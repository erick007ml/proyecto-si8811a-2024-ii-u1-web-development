import {
  getEquipoById,
  getParticipanteByEquipoId,
} from '@/api/services/equipoApi'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Equipo as EquipoType } from '@/interfaces/Equipo'
import { Participante } from '@/interfaces/Participante'
import { Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EquipoDetalle() {
  const [participantes, setParticipantes] = useState<Participante[]>([])
  const [equipo, setEquipo] = useState<EquipoType | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchEquipos = async () => {
      try {
        if (!id) {
          setError('ID de equipo no válido.')
          return navigate('/equipos')
        }

        const { data } = await getEquipoById(id)
        setEquipo(data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || 'Error al obtener el equipo.')
      }
    }

    fetchEquipos()
  }, [id, navigate])

  useEffect(() => {
    const fetchParticipantes = async () => {
      try {
        if (!id) {
          setError('ID de equipo no válido.')
          return navigate('/equipos')
        }

        const data = await getParticipanteByEquipoId(id)
        setParticipantes(data || [])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || 'Error al obtener los participantes.')
      }
    }

    fetchParticipantes()
  }, [id, navigate])

  return (
    <DefaultLayout>
      <div className='container mx-auto py-8'>
        {error && <p className='text-center text-red-600 text-lg'>{error}</p>}
        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='text-3xl font-bold'>
              {equipo?.nombre}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-lg text-muted-foreground mb-4'>
              {equipo?.detalle}
            </p>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <div className='flex items-center gap-2'>
                <Users className='h-5 w-5 text-muted-foreground' />
                <span>{equipo?.participantes?.length} participantes</span>
              </div>
            </div>
          </CardContent>
          <CardHeader>
            <CardTitle className='text-xl font-bold'>Participantes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className='space-y-4'>
              {participantes && participantes.length > 0 ? (
                participantes.map((participante) => (
                  <li key={participante.id} className='flex items-center gap-4'>
                    <Avatar>
                      <AvatarFallback>
                        {participante.nombre
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className='font-medium'>{participante.nombre}</p>
                      <p className='text-sm text-muted-foreground'>
                        {participante.detalle}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <p>No hay participantes disponibles</p>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  )
}
