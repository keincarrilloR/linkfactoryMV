import ReactDOM from 'react-dom/client'
import App from './App'
import { SocketProvider } from './context/SocketContext'
import { ClockProvider } from './context/ClockContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SocketProvider>
    <ClockProvider>
      <App />
    </ClockProvider>
  </SocketProvider>
)
