import CardMonitor from '../CardMonitor';
import {  MonitoresContainer, DisciplinaContainer, DisciplinaTitulo, Container } from './styles';
import { useEffect, useState } from "react";
import { useProfMonitores } from "../../hooks/useProfMonitores";
import { Disciplina } from '../../utils/types';

const ListaMonitores = () => {
  const [ disciplinas, setDisciplinas ] = useState<Disciplina[]>()
  useEffect(() => {
    const GetMonitores = async () => {
      const { disciplinas } = await useProfMonitores();
      setDisciplinas(disciplinas)
    }
    GetMonitores();
  },[])

  return (
    <Container>
      {disciplinas && disciplinas.map(disciplina => (
        <DisciplinaContainer key={disciplina.idDisciplina}>
          <DisciplinaTitulo>{disciplina.nomeDisciplina}</DisciplinaTitulo>
          <MonitoresContainer>
            {disciplina.monitores.map((monitor) => {
              return <CardMonitor monitor={monitor} key={monitor.id}/>
            })}
          </MonitoresContainer>
        </DisciplinaContainer>
      ))} 
    </Container>
  )
}
export default ListaMonitores;