import { getParticipantes } from '@/api/services/participanteApi'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Participante } from '@/interfaces/Participante'
import { Trophy } from 'lucide-react'
import { useEffect, useState } from 'react'
const Participantes = () => {
  const [participantes, setParticipantes] = useState<Participante[]>([])
  const [selectedFaculty, setSelectedFaculty] = useState('all')

  // const filteredParticipants = participantes.filter(
  //   participant => selectedFaculty === "all" || participant.faculty === selectedFaculty
  // )

  useEffect(() => {
    const fetchParticipantes = async () => {
      const data = await getParticipantes()
      setParticipantes(data)
    }
    fetchParticipantes()
  }, [])

  return (
    <DefaultLayout>
      <div className='container py-8'>
        <h1 className='text-4xl font-bold text-center mb-8'>Participantes</h1>

        <div className='flex justify-end mb-6'>
          <Select value={selectedFaculty} onValueChange={setSelectedFaculty}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Todas las facultades' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>Todas las facultades</SelectItem>
              <SelectItem value='FAING'>FAING</SelectItem>
              <SelectItem value='FAEDCOH'>FAEDCOH</SelectItem>
              <SelectItem value='FACSA'>FACSA</SelectItem>
              <SelectItem value='FADE'>FADE</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {participantes.map((participant) => (
            <Card key={participant.id}>
              <CardHeader>
                <CardTitle className='flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    {/* <AvatarImage src={participant.avatar} /> */}
                    <AvatarFallback>
                      {participant.nombre
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className='text-xl font-bold'>{participant.nombre}</h3>
                    {/* <p className="text-sm text-muted-foreground">{participant.faculty}</p> */}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <p className='font-medium mb-2'>Eventos:</p>
                    <div className='flex flex-wrap gap-2'>
                      {['Poesía', 'Cuento'].map((event) => (
                        <Badge key={event} variant='secondary'>
                          {event}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className='flex items-center gap-2 mb-2'>
                      <Trophy className='h-5 w-5 text-muted-foreground' />
                      <span className='font-medium'>Logros:</span>
                    </div>
                    <ul className='list-disc list-inside text-sm text-muted-foreground'>
                      {['Segundo lugar Danza 2023'].map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Participantes
