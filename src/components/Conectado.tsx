import { CircleCheck, CircleX } from 'lucide-react'
import { useSocket } from '../hooks/useSocket'

const Conectado = () => {
  const { isConnected } = useSocket()
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center opacity-70 gap-2">
      <span className="flex items-center gap-2 text-xs md:text-md">
        {isConnected ? 'Conectado' : 'Desconectado'}
        {isConnected ? (
          <CircleCheck className="w-6 h-6 text-success" />
        ) : (
          <CircleX className="w-6 h-6 text-error" />
        )}
      </span>
    </div>
  )
}

export default Conectado
