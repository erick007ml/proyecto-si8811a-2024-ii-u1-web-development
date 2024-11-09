import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Calendar,
  Clock,
  School,
  Info,
  MapPin,
  Trash2Icon,
  PenIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Evento as EventoType } from '@/interfaces/Evento'
import { deleteEvento, getEventoById } from '@/api/services/eventoApi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { FaTwitter } from 'react-icons/fa'
import { useAuthStore } from '@/hooks/useAuthStore'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
export default function Evento() {
  const { toast } = useToast()

  const { isAuthenticated } = useAuthStore()
  const params = useParams()
  const id = params.id
  const [evento, setEvento] = useState<EventoType | undefined>()

  const navigate = useNavigate()
  useEffect(() => {
    const fetchEvento = async () => {
      if (!id) return
      const data = await getEventoById(id)
      setEvento(data)
    }
    fetchEvento()
  }, [id])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getDuration = (start: Date, end: Date) => {
    const durationMs = end.getTime() - start.getTime()
    const durationMinutes = Math.round(durationMs / 60000)
    return `${durationMinutes} minutos`
  }

  const message =
    `Me alegra compartirles este evento:\n\n` +
    `Nombre: ${evento?.nombre}\n` +
    `Facultad: ${evento?.facultad}\n\n` +
    `¡No te lo pierdas!`

  const encodedMessage = encodeURIComponent(message)

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedMessage}`

  const handleDeleteEvento = async () => {
    try {
      if (!id) return
      await deleteEvento(id)
      toast({
        title: 'Evento eliminado',
        description: 'El evento ha sido eliminado exitosamente.',
      })
      setTimeout(() => {
        navigate('/eventos')
      }, 1500)
    } catch (error) {
      toast({
        title: 'Error',
        description:
          'Hubo un problema al eliminar el evento. Por favor, intente nuevamente.',
        variant: 'destructive',
      })
    }
  }
  return (
    <DefaultLayout>
      <Dialog>
        <div className=' py-8'>
          <Card className='max-w-3xl mx-auto'>
            <CardHeader>
              <div className='flex justify-between items-start'>
                <div>
                  <CardTitle className='text-3xl font-bold mb-2'>
                    {evento?.nombre}
                  </CardTitle>
                  <CardDescription className='text-lg'>
                    <Badge variant='secondary' className='mr-2'>
                      {evento?.facultad}
                    </Badge>
                    {evento?.resultado === 'Vacio'
                      ? 'Evento pendiente'
                      : evento?.resultado}
                  </CardDescription>
                </div>
                {isAuthenticated && (
                  <div className='flex items-center gap-4'>
                    <Link
                      to={'/eventos/editar/' + evento?.id}
                      className='flex text-gray-500'
                    >
                      <Button variant='secondary'>
                        <PenIcon />
                      </Button>
                    </Link>
                    <span className='flex '>
                      <DialogTrigger asChild>
                        <Button variant='destructive'>
                          <Trash2Icon />
                        </Button>
                      </DialogTrigger>
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-center gap-2'>
                  <Calendar className='h-5 w-5 text-muted-foreground' />
                  <span>
                    {evento?.fechaInicio
                      ? formatDate(new Date(evento.fechaInicio))
                      : 'Fecha no disponible'}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='h-5 w-5 text-muted-foreground' />
                  <span>
                    Duración:{' '}
                    {evento?.fechaInicio && evento?.fechaTermino
                      ? getDuration(
                          new Date(evento.fechaInicio),
                          new Date(evento.fechaTermino)
                        )
                      : 'Duración no disponible'}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <School className='h-5 w-5 text-muted-foreground' />
                  <span>{evento?.facultad}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MapPin className='h-5 w-5 text-muted-foreground' />
                  <span>{evento?.facultad}</span>
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
                  <Info className='h-5 w-5' />
                  Descripción del Evento
                </h3>
                <p className='text-muted-foreground'>{evento?.descripcion}</p>
              </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
              <a href={twitterUrl} target='_blank' rel='noopener noreferrer'>
                <Button variant='outline'>
                  <span>
                    <FaTwitter className='text-blue-500' />
                  </span>
                  Compartir evento
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Estas seguro de eliminar este evento?</DialogTitle>
            <DialogDescription>
              Esta acción no se puede deshacer.
            </DialogDescription>

            <DialogFooter>
              <DialogClose asChild>
                <Button type='button' variant='secondary'>
                  Cancelar
                </Button>
              </DialogClose>

              <Button
                onClick={() => handleDeleteEvento()}
                className='bg-red-600'
                type='button'
              >
                Eliminar evento
              </Button>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </DefaultLayout>
  )
}