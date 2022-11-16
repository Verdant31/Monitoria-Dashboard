import { Monitor } from '../../utils/types'
import { MonitorCardContainer } from './styles'
import { Trash } from 'phosphor-react'
import { ProfessorController } from '../../api/ProfessorController'

interface CardMonitorProps {
  monitor: Monitor
}

const CardMonitor = ({ monitor }: CardMonitorProps) => {
  async function handleDeleteMonitor() {
    await ProfessorController.getInstance().removerMonitor(monitor.id)
  }
  return (
    <MonitorCardContainer>
      <div>
        <p>Nome: {monitor.nomeAluno}</p>
        <p>Email: {monitor.email}</p>
      </div>
      <Trash onClick={handleDeleteMonitor} size={32} color="#fff" />
    </MonitorCardContainer>
  )
}
export default CardMonitor
