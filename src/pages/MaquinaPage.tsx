import { useParams, Link, Navigate } from 'react-router-dom'
import { MAQUINAS } from '../config/maquinas'
import DashboardLayout from '../layout/Layout'
import Informativo from '../components/main/Informativo'
import Galvanizado from '../components/main/Galvanizado'
import Variables from '../components/main/Variables'
import Clock from '../components/Clock'
import CodigoColores from '../components/CodigoColores'
import Conectado from '../components/Conectado'

const MaquinaPage = () => {
  const { id } = useParams<{ id: string }>()
  const maquina = MAQUINAS.find(m => m.id === id)

  if (!maquina) return <Navigate to="/" replace />

  const { id: maquinaId, nombre, galvanizado, variables } = maquina

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border gap-3">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-white/40 hover:text-white transition-colors text-md md:text-xlroun"
            >
              ← Inicio
            </Link>
            <h1 className="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest text-white leading-tight">
              {nombre} <span className="opacity-40 mx-1">—</span> MX
            </h1>
          </div>
          <span className="text-xs sm:text-base font-mono text-white/80 tabular-nums text-right shrink-0">
            <Clock />
          </span>
        </div>

        <Informativo maquinaId={maquinaId} />
        {galvanizado && <Galvanizado maquinaId={maquinaId} />}
        {variables && <Variables maquinaId={maquinaId} />}

        <footer className="flex justify-between border-t border-border px-4 sm:px-6 py-3">
          <CodigoColores />
          <Conectado />
        </footer>
      </div>
    </DashboardLayout>
  )
}

export default MaquinaPage
