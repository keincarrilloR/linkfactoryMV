import { Link } from 'react-router-dom'
import { MAQUINAS } from '../config/maquinas'
import DashboardLayout from '../layout/Layout'

const Home = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-full">
        {MAQUINAS.map(({ maquinaId, nombre }) => (
          <Link
            key={maquinaId}
            to={`/maquina/${maquinaId}`}
            className="bg-panel border border-border rounded-xl px-6 py-5 hover:bg-elevated hover:border-white/20 transition-all group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-40 mb-1">
                  {maquinaId}
                </p>
                <h3 className="text-lg font-semibold group-hover:text-white">
                  {nombre}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  )
}

export default Home
