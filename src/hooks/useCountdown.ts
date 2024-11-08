import { useEffect, useState } from 'react'

export interface TimeLeft {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export const useCountdown = (startDate: Date, endDate: Date) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date()
    const isBeforeStart = now.getTime() < startDate.getTime()
    const targetTime = isBeforeStart ? startDate : endDate
    const difference = targetTime.getTime() - now.getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }
    return {}
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [startDate, endDate])

  return timeLeft
}
