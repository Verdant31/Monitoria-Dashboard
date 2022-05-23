import monitorias from '../../../monitores.json';
import CardMonitor from '../CardMonitor';
import {  MonitoresContainer, DisciplinaContainer, DisciplinaTitulo, Container, MonitorCard} from './styles';

const ListaMonitores = () => {

  return (
    <Container>
      {monitorias.map((monitoria) => {
        return (
          <DisciplinaContainer key={monitoria.codDisciplina}>
            <DisciplinaTitulo>{monitoria.nomeDisciplina}</DisciplinaTitulo>
            <MonitoresContainer>
              {monitoria.monitores.map((monitor) => {
                return <CardMonitor monitor={monitor} key={monitor.idMonitor}/>
              })}
            </MonitoresContainer>
          </DisciplinaContainer>
        )
      })}
    </Container>
  )
}
export default ListaMonitores;