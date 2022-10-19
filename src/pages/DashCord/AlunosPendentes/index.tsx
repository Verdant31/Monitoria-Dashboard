import CardAluno from '../../../components/CardAluno'
import SideBar from '../../../components/SideBar'
import Title from '../../../components/Title'
import { Container, GridContainer, MainContainer } from './styles'
import { useEffect, useState } from 'react'
import { CoordenadorController } from '../../../api/CoordenadorController'
import { AlunoPendente } from '../../../@types'

const AlunosAprovados = () => {
  const [alunosPendentes, setAlunosPendentes] = useState<AlunoPendente[]>([])
  useEffect(() => {
    async function getAlunosPendentes() {
      await CoordenadorController.getInstance()
        .getSolicitacoesPendentes()
        .then((res) => {
          setAlunosPendentes(res)
        })
    }
    getAlunosPendentes()
  }, [])
  console.log(alunosPendentes)
  return (
    <>
      <Container>
        <SideBar />
        <MainContainer>
          <Title displayTitle title={'Alunos Pendentes'} />
          <GridContainer>
            {alunosPendentes.map((solicitacoesPendentes) => (
              <CardAluno
                key={solicitacoesPendentes.id}
                matricula={solicitacoesPendentes.matriculaAluno}
                disciplina={solicitacoesPendentes.disciplinaDesejada}
              />
            ))}
          </GridContainer>
        </MainContainer>
      </Container>
    </>
  )
}

export default AlunosAprovados
