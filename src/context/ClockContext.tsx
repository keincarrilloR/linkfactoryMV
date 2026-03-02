import { createContext, useEffect, useState, type ReactNode } from 'react'

type ClockContextType = {
  timeString: string
}

export const ClockContext = createContext<ClockContextType>({ timeString: '' })

export const ClockProvider = ({ children }: { children: ReactNode }) => {
  const [timeString, setTimeString] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const ahora = new Date()
      const formatted = ahora.toLocaleString('es-MX', {
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

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <ClockContext.Provider value={{ timeString }}>
      {children}
    </ClockContext.Provider>
  )
}
