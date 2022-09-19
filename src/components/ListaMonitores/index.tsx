import CardMonitor from '../CardMonitor'
import {
  MonitoresContainer,
  DisciplinaContainer,
  DisciplinaTitulo,
  Container,
} from './styles'
import { useEffect, useState } from 'react'
import { Disciplina } from '../../utils/types'
import { useAuth } from '../../contexts/AuthContext'
import { ProfessorController } from '../../api/ProfessorController'

const ListaMonitores = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>()
  const { user } = useAuth()

  useEffect(() => {
    async function getMonitores() {
      if (user) {
        await ProfessorController.getInstance()
          .getMonitores(user)
          .then((res) => {
            setDisciplinas(res.disciplinas)
          })
      }
    }
    getMonitores()
  }, [user])

  return (
    <Container>
      {disciplinas &&
        disciplinas.map((disciplina) => (
          <DisciplinaContainer key={disciplina.idDisciplina}>
            <DisciplinaTitulo>{disciplina.nomeDisciplina}</DisciplinaTitulo>
            <MonitoresContainer>
              {disciplina.monitores.map((monitor) => {
                return <CardMonitor monitor={monitor} key={monitor.id} />
              })}
            </MonitoresContainer>
          </DisciplinaContainer>
        ))}
    </Container>
  )
}
export default ListaMonitores
