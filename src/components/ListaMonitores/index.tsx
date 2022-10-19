import CardMonitor from '../CardMonitor'
import {
  MonitoresContainer,
  DisciplinaContainer,
  DisciplinaTitulo,
  Container,
} from './styles'
import { Disciplina } from '../../utils/types'

interface ListaMonitoresProps {
  disciplinas: Disciplina[] | undefined
}

const ListaMonitores = ({ disciplinas }: ListaMonitoresProps) => {
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
