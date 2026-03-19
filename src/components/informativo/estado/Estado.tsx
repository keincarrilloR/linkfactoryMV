import { Play, Square } from 'lucide-react'

interface Props {
  estado?: string
}

const Estado = ({ estado = 'Detenido' }: Props) => {
  return (
    <div className="flex items-center gap-3">
      {estado === 'Corriendo' ? (
        <Play className="w-6 h-6 sm:w-7 sm:h-7 text-on" />
      ) : (
        <Square className="w-6 h-6 sm:w-7 sm:h-7 text-off" />
      )}

      <div className="flex flex-col">
        <span className="text-xs sm:text-md opacity-70">Estado </span>
        <span
          className={`text-sm sm:text-md font-semibold ${
            estado === 'Corriendo' ? 'text-on' : 'text-off'
          }`}
        >
          {estado === 'Corriendo' ? 'Operando' : 'Detenido'}
        </span>
      </div>
    </div>
  )
}

export default Estado
