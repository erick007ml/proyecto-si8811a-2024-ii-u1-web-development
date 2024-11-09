import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { createEvento, getEventoById } from '@/api/services/eventoApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Evento as EventoType } from '@/interfaces/Evento'

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  fechaInicio: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Fecha de inicio inválida.',
  }),
  fechaTermino: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Fecha de término inválida.',
  }),
  facultad: z.string().min(1, {
    message: 'Debe seleccionar una facultad.',
  }),
  resultado: z.string().optional(),
  descripcion: z.string().min(10, {
    message: 'La descripción debe tener al menos 10 caracteres.',
  }),
})

export default function EditarEvento() {
  const { id } = useParams()
  const [evento, setEvento] = useState<EventoType>()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      fechaInicio: '',
      fechaTermino: '',
      facultad: '',
      resultado: '',
      descripcion: '',
    },
  })

  useEffect(() => {
    const fetchEvento = async () => {
      if (!id) return
      const data = await getEventoById(id)
      console.log(data)
      setEvento(data)
      const formatDate = (date: Date) => {
        return new Date(date).toISOString().split('T')[0]
      }
      form.reset({
        nombre: data.nombre,
        fechaInicio: data.fechaInicio
          ? formatDate(new Date(data.fechaInicio))
          : '',
        fechaTermino: data.fechaTermino
          ? formatDate(new Date(data.fechaTermino))
          : '',
        facultad: data.facultad,
        resultado: data.resultado || '',
        descripcion: data.descripcion,
      })
    }

    fetchEvento()
  }, [])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const {
        descripcion,
        facultad,
        fechaInicio,
        fechaTermino,
        nombre,
        resultado,
      } = values
      const newDateInicio = new Date(fechaInicio)
      const newDateTermino = new Date(fechaTermino)
      const resultadoFinal = resultado ? resultado : ''

      if (!newDateInicio || !newDateTermino) {
        toast({
          title: 'Error',
          description:
            'La fecha de inicio y la fecha de término son obligatorias.',
          variant: 'destructive',
        })
        return
      }
      if (fechaInicio > fechaTermino) {
        toast({
          title: 'Error',
          description:
            'La fecha de inicio debe ser anterior a la fecha de término.',
          variant: 'destructive',
        })
        return
      }
      await createEvento({
        descripcion,
        facultad,
        fechaInicio: newDateInicio,
        fechaTermino: newDateTermino,
        nombre,
        resultado: resultadoFinal,
      })
      console.log(values)
      toast({
        title: 'Evento creado',
        description: 'El evento ha sido creado exitosamente.',
      })
      setTimeout(() => {
        navigate('/eventos')
      }, 1500)
      form.reset()
    } catch (error) {
      toast({
        title: 'Error',
        description:
          'Hubo un problema al crear el evento. Por favor, intente nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <DefaultLayout>
      <div className='container mx-auto py-8'>
        <Card className='max-w-2xl mx-auto'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Editar Evento</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'
              >
                <FormField
                  control={form.control}
                  name='nombre'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Evento</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Ingrese el nombre del evento'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className='grid gap-4 sm:grid-cols-2'>
                  <FormField
                    control={form.control}
                    name='fechaInicio'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de Inicio</FormLabel>
                        <FormControl>
                          <Input type='datetime-local' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='fechaTermino'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de Término</FormLabel>
                        <FormControl>
                          <Input type='datetime-local' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name='facultad'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Facultad</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={evento?.facultad}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Seleccione una facultad' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='FAING'>
                            Facultad de Ingeniería
                          </SelectItem>
                          <SelectItem value='FAEDCOH'>
                            Facultad de Educación, Ciencias de la Comunicación y
                            Humanidades
                          </SelectItem>
                          <SelectItem value='FACSA'>
                            Facultad de Ciencias de la Salud
                          </SelectItem>
                          <SelectItem value='FADE'>
                            Facultad de Derecho y Ciencias Empresariales
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='resultado'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Resultado (opcional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder='Ingrese el resultado si está disponible'
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Deje en blanco si el evento aún no ha concluido.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='descripcion'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descripción</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='Ingrese una descripción detallada del evento'
                          className='min-h-[100px]'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className='px-0'>
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Creando evento...' : 'Crear Evento'}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  )
}
