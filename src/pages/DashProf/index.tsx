import { Container, MainContainer } from './styles'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import ListaSolicitacoes from '../../components/ListaSolicitacoes'
import { useEffect, useState } from 'react'
import { SolicitacaoMonitor, SolicitacaoAbertura } from '../../utils/types'
import { useAuth } from '../../contexts/AuthContext'
import { ProfessorController } from '../../api/ProfessorController'

const DashProf = () => {
  const [solicitacoesMonitores, setSolicitacoesMonitores] =
    useState<SolicitacaoMonitor[]>()
  const [solicitacoesAbertura, setSolicitacoesAbertura] =
    useState<SolicitacaoAbertura[]>()

  const { user } = useAuth()

  useEffect(() => {
    async function getSolicitacoes() {
      if (user) {
        await ProfessorController.getInstance()
          .getAllSolicitacoes(user)
          .then((res) => {
            setSolicitacoesMonitores(res.monitores)
            setSolicitacoesAbertura(res.abertura)
          })
      }
    }
    getSolicitacoes()
  }, [user])

  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title displayTitle={false} title={'Solicitações de Monitoria'} />
        {solicitacoesMonitores && (
          <>
            <ListaSolicitacoes
              title="Solicitações de Monitores"
              solicitacoes={solicitacoesMonitores}
            />
          </>
        )}
        {solicitacoesAbertura && (
          <ListaSolicitacoes
            abertura
            title="Abertura de Monitoria"
            solicitacoes={solicitacoesAbertura}
          />
        )}
      </MainContainer>
    </Container>
  )
}
export default DashProf
