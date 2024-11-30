import { getLugares } from '@/api/services/lugaresApi';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type Lugar } from '@/interfaces/Lugares';
import { MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';


const Lugares = () => {
  const [lugares, setLugares] = useState<Lugar[]>([]);

  useEffect(() => {
    const fetchLugares = async () => {
      const data = await getLugares();
      console.log(data);
      setLugares(data);
    };
    fetchLugares();
  }, []);

  // const decimalToDMS = (decimal: number, isLat: boolean): string => {
  //   const absDecimal = Math.abs(decimal);
  //   const degrees = Math.floor(absDecimal);
  //   const minutesDecimal = (absDecimal - degrees) * 60;
  //   const minutes = Math.floor(minutesDecimal);
  //   const seconds = ((minutesDecimal - minutes) * 60).toFixed(2);
  //   const direction = decimal >= 0 
  //     ? (isLat ? 'N' : 'E') 
  //     : (isLat ? 'S' : 'W');
  //   return `${degrees}°${minutes}'${seconds}"${direction}`;
  // };

  return (
    <DefaultLayout>
      <div className='container py-8'>
        <h1 className='text-4xl font-bold text-center mb-8'>Lugares</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {lugares.map((lugar) => {
            // Convertir coordenadas a DMS
            // const latDMS = decimalToDMS(lugar.latitud, true);
            // const lonDMS = decimalToDMS(lugar.longitud, false);
            // const googleMapsLink = `https://www.google.com/maps/place/${latDMS}+${lonDMS}/@${lugar.latitud},${lugar.longitud},18z`;

            return (
              <Card key={lugar._id} className='overflow-hidden'>
                <CardHeader>
                  <CardTitle className='flex items-center gap-2'>
                    <MapPin className='h-5 w-5' />
                    {lugar.nombre_lugar}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>
                    {lugar.descripcion}
                  </p>
                  <p className='text-sm font-medium mb-2'>
                    Dirección: {lugar.descripcion}
                  </p>
                  <div>
                    <p className='text-sm font-medium mb-1'>Categorías:</p>
                    <ul className='list-disc list-inside text-sm text-muted-foreground uppercase'>
                      {lugar.id_categoria}
                    </ul>
                  </div>
                  {/* <a
                    href={googleMapsLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 underline text-sm'
                  >
                    Ver en Google Maps
                  </a> */}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Lugares;
