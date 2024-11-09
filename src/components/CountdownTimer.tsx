import { useCountdown } from '@/hooks/useCountdown'

interface CountdownTimerProps {
  className: string
  startDate: Date
  endDate: Date
}

const CountdownTimer = ({
  className,
  startDate,
  endDate,
}: CountdownTimerProps) => {
  const timeLeft = useCountdown(startDate, endDate)
  const now = new Date()

  return (
    <div className={className}>
      {now.getTime() < startDate.getTime() ? (
        <div className='text-center grid grid-cols-2 sm:grid-cols-4 gap-1'>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className='bg-white p-4 sm:p-2 rounded-lg shadow-lg flex flex-col items-center justify-center'
            >
              <span className='text-xl sm:text-2xl font-bold text-gray-800 text-center'>
                {value}
              </span>
              <p className='text-sm sm:text-base text-center text-gray-600 capitalize'>
                {unit}
              </p>
            </div>
          ))}
        </div>
      ) : now.getTime() > endDate.getTime() ? (
        <span className='text-xl sm:text-2xl font-bold text-white text-center underline'>
          El evento ya terminó
        </span>
      ) : (
        <span className='text-xl sm:text-2xl font-bold text-white text-center underline'>
          El evento ya empezó
        </span>
      )}
    </div>
  )
}

export default CountdownTimer
