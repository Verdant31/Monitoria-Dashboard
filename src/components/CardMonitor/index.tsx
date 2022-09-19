import { Monitor, MonitorCard } from '../../utils/types'
import { MonitorCardContainer } from './styles'

interface CardMonitorProps {
  monitor: Monitor
}

const CardMonitor = ({ monitor }: CardMonitorProps) => {
  return (
    <MonitorCardContainer>
      <p>Nome: {monitor.nomeAluno}</p>
      <p>Email: {monitor.email}</p>
    </MonitorCardContainer>
  )
}
export default CardMonitor
