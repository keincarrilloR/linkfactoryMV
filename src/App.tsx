import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MaquinaPage from './pages/MaquinaPage'

const App = () => {
  return (
    <BrowserRouter basename="/operaweb/dist/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maquina/:id" element={<MaquinaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
