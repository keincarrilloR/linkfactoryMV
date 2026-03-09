import { createContext, useEffect, useState, type ReactNode } from 'react'

type ClockContextType = {
  timeString: string
}

interface Props {
  children: ReactNode
}

export const ClockContext = createContext<ClockContextType>({ timeString: '' })

export const ClockProvider = ({ children }: Props) => {
  const [timeString, setTimeString] = useState('')

  const time = () => {
    const formatted = new Date().toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
    setTimeString(formatted)
  }

  useEffect(() => {
    time()
    setInterval(time, 1000)
  }, [])

  return (
    <ClockContext.Provider value={{ timeString }}>
      {children}
    </ClockContext.Provider>
  )
}
