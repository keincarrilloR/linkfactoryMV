import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import MaquinaPage from './pages/MaquinaPage'

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maquina/:id" element={<MaquinaPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
