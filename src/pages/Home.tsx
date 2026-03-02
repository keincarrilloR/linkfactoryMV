import { Link } from 'react-router-dom'
import { MAQUINAS } from '../config/maquinas'
import Clock from '../components/Clock'

const Home = () => {
  return (
    <div className="min-h-screen bg-main text-font-primary flex flex-col">
      <div className="px-6 py-8 border-b border-border flex items-center justify-between">
        <h1 className="text-2xl font-bold uppercase tracking-widest">
          LinkFactory <span className="opacity-40">—</span> MX
        </h1>
        <span className="font-mono text-white/80 tabular-nums">
          <Clock />
        </span>
      </div>

      <main className="flex-1 px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
          {MAQUINAS.map(({ id, nombre }) => (
            <Link
              key={id}
              to={`/maquina/${id}`}
              className="bg-panel border border-border rounded-xl px-6 py-5 hover:bg-elevated hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-1">
                    {id}
                  </p>
                  <h3 className="text-lg font-semibold group-hover:text-white">
                    {nombre}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
