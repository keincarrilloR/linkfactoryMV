import { useContext } from 'react'
import { ClockContext } from '../context/ClockContext'

const Clock = () => {
  const { timeString } = useContext(ClockContext)
  return <span>{timeString}</span>
}

export default Clock
