import { getEventos } from '@/api/services/eventoApi'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Skeleton } from '@/components/Skeleton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Calendar, Clock, School } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Evento {
  id: number
  nombre: string
  fechaInicio: string
  fechaTermino: string
  facultad: string
  resultado?: string
  descripcion: string
}

export default function Eventos() {
  const [selectedFaculty, setSelectedFaculty] = useState('all')
  const [showActiveOnly, setShowActiveOnly] = useState(false)
  const [eventos, setEventos] = useState<Evento[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchEventos = async () => {
      const data = await getEventos()
      setEventos(data)
      setTimeout(() => {
        setIsLoading(false)
      }, 200)
    }
    fetchEventos()
  }, [])

  const filteredEvents = eventos.filter((event) => {
    if (selectedFaculty !== 'all' && event.facultad !== selectedFaculty)
      return false
    if (showActiveOnly) {
      const now = new Date()
      const endDate = new Date(event.fechaTermino)
      if (endDate < now) return false
    }
    return true
  })

  return (
    <DefaultLayout>
      <div className='container p-8'>
        <h1 className='text-4xl font-bold text-center mb-8'>Eventos</h1>

        <div className='flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center'>
          <div className='flex items-center gap-2'>
            <label htmlFor='faculty' className='text-sm font-medium'>
              Filtrar por Facultad:
            </label>
            <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Todas' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>Todas</SelectItem>
                <SelectItem value='FAING'>FAING</SelectItem>
                <SelectItem value='FAEDCOH'>FAEDCOH</SelectItem>
                <SelectItem value='FACSA'>FACSA</SelectItem>
                <SelectItem value='FADE'>FADE</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <label htmlFor='active' className='text-sm font-medium'>
              Mostrar solo eventos vigentes:
            </label>
            <Switch
              id='active'
              checked={showActiveOnly}
              onCheckedChange={setShowActiveOnly}
            />
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <Skeleton key={index} index={index} />
              ))
            : filteredEvents.map((event: Evento) => (
                <Card key={event.id} className='flex flex-col'>
                  <CardHeader>
                    <CardTitle className='text-xl'>{event.nombre}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex-1'>
                    <p className='text-muted-foreground mb-4 text-justify overflow-hidden overflow-ellipsis line-clamp-2'>
                      {event.descripcion}
                    </p>

                    <div className='space-y-2'>
                      <div className='flex items-center gap-2'>
                        <Calendar className='h-4 w-4' />
                        <span className='text-sm'>
                          Inicio:{' '}
                          {new Date(event.fechaInicio).toLocaleDateString()}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Clock className='h-4 w-4' />
                        <span className='text-sm'>
                          Fin:{' '}
                          {new Date(event.fechaTermino).toLocaleDateString()}
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <School className='h-4 w-4' />
                        <span className='text-sm'>
                          Facultad: {event.facultad}
                        </span>
                      </div>
                    </div>
                    <Link to={`/eventos/${event.id}`}>
                      <Button className='w-full mt-4'>Ver detalles</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </DefaultLayout>
  )
}
