import { useParams, Navigate } from 'react-router-dom'
import { MAQUINAS } from '../config/maquinas'
import DashboardLayout from '../layout/Layout'
import Informativo from '../components/main/Informativo'
import Galvanizado from '../components/main/Galvanizado'
import Variables from '../components/main/Variables'
import CodigoColores from '../components/CodigoColores'
import Conectado from '../components/Conectado'

const MaquinaPage = () => {
  const { id } = useParams<{ id: string }>() // Obtiene el id de los parametros
  const maquina = MAQUINAS.find(m => m.maquinaId === id) // Busca si existe el id en MAQUINAS

  if (!maquina) return <Navigate to="/" replace />

  const { maquinaId, nombre, galvanizado, variables } = maquina

  return (
    <DashboardLayout title={`${nombre} — MX`} backLink>
      <div className="grid gap-6">
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
