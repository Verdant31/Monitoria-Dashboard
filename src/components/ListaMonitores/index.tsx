import monitores from '../../../monitores.json';
import {  DisciplinaContainer, DisciplinaTitulo } from './styles';

const ListaMonitores = () => {

  return (
    <>
      {monitores.map((monitor) => {
        return (
          <DisciplinaContainer key={monitor.codDisciplina}>
            <DisciplinaTitulo>Hehe</DisciplinaTitulo>
          </DisciplinaContainer>
        )
      })}
    </>
  )
}
export default ListaMonitores;