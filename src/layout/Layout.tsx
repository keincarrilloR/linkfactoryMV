interface Props {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-main text-font-primary flex flex-col">
      <main className="flex-1 px-3 sm:px-6 py-4 sm:py-6 space-y-6">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
