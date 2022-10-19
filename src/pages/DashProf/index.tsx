import { Container, MainContainer } from './styles'
import SideBar from '../../components/SideBar'
import Title from '../../components/Title'
import ListaSolicitacoes from '../../components/ListaSolicitacoes'
import { useEffect, useState } from 'react'
import { SolicitacaoMonitor, SolicitacaoAbertura } from '../../utils/types'
import { ProfessorController } from '../../api/ProfessorController'

const DashProf = () => {
  const [solicitacoesMonitores, setSolicitacoesMonitores] = useState<
    SolicitacaoMonitor[]
  >([])
  const [solicitacoesAbertura, setSolicitacoesAbertura] = useState<
    SolicitacaoAbertura[]
  >([])

  useEffect(() => {
    async function getSolicitacoes() {
      await ProfessorController.getInstance()
        .getAllSolicitacoes()
        .then((res) => {
          setSolicitacoesMonitores(res.monitores)
          setSolicitacoesAbertura(res.abertura)
        })
    }
    getSolicitacoes()
  }, [])

  const updateListaMonitores = (solicitacaoId: string) => {
    setSolicitacoesMonitores((oldState) =>
      oldState?.filter((solicitacao) => solicitacao.id !== solicitacaoId),
    )
  }
  const updateListaAbertura = (solicitacaoId: string) => {
    setSolicitacoesAbertura((oldState) =>
      oldState?.filter((solicitacao) => solicitacao.id !== solicitacaoId),
    )
  }

  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title displayTitle={false} title={'Solicitações de Monitoria'} />
        {solicitacoesMonitores && (
          <>
            <ListaSolicitacoes
              title="Solicitações de Monitores"
              gridHeight="12.5rem"
              solicitacoes={solicitacoesMonitores}
              updateLista={updateListaMonitores}
            />
          </>
        )}
        {solicitacoesAbertura && (
          <ListaSolicitacoes
            abertura
            gridHeight="17rem"
            title="Abertura de Monitoria"
            solicitacoes={solicitacoesAbertura}
            updateLista={updateListaAbertura}
          />
        )}
      </MainContainer>
    </Container>
  )
}
export default DashProf
