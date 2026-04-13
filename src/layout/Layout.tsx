import Clock from '../components/Clock'
import { Link } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
  title?: string
  backLink?: boolean
}

const DashboardLayout = ({ children, title, backLink = false }: Props) => {
  return (
    <div className="min-h-screen bg-main text-font-primary flex flex-col">
      <header className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border flex items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {backLink && (
            <Link
              to="/"
              className="text-white/40 hover:text-white transition-colors text-md"
            >
              ← Inicio
            </Link>
          )}
          <h1 className="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-widest text-white leading-tight">
            {title ?? (
              <>
                LinkFactory <span className="opacity-40">—</span> MV
              </>
            )}
          </h1>
        </div>
        <span className="text-xs sm:text-base font-mono text-white/80 tabular-nums text-right shrink-0">
          <Clock />
        </span>
      </header>
      <main className="flex-1 px-3 sm:px-6 py-4 sm:py-6 space-y-6">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
