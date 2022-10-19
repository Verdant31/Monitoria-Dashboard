import { useState, useEffect } from 'react'
import ListaSolicitacoes from '../../components/ListaSolicitacoes'
import SideBar from '../../components/SideBar'

import { Container, MainContainer } from './styles'

import data from '../../../solicitacoes.json'
import Title from '../../components/Title'
import { useSolicitacaoModalContext } from '../../contexts/SolicitacaoModalContext'
import { SolicitacaoMonitor } from '../../utils/types'
import { useAuth } from '../../contexts/AuthContext'
import { CoordenadorController } from '../../api/CoordenadorController'

const DashProf = () => {
  const { isOpen } = useSolicitacaoModalContext()
  const [solicitacoesMonitores, setSolicitacoesMonitores] =
    useState<SolicitacaoMonitor[]>()

  const { user } = useAuth()
  useEffect(() => {
    async function getSolicitacoes() {
      await CoordenadorController.getInstance()
        .getAllSolicitacoes()
        .then((res) => {
          setSolicitacoesMonitores(res.monitores)
        })
    }
    getSolicitacoes()
  }, [user])

  const updateListaMonitores = (solicitacaoId: string) => {
    setSolicitacoesMonitores((oldState) =>
      oldState?.filter((solicitacao) => solicitacao.id !== solicitacaoId),
    )
  }

  return (
    <>
      <Container isModalOpen={isOpen}>
        <SideBar />
        <MainContainer>
          <Title displayTitle title={'Solicitações de Monitoria'} />
          {data ? (
            <ListaSolicitacoes
              updateLista={updateListaMonitores}
              solicitacoes={solicitacoesMonitores}
            />
          ) : (
            <h1>Você não tem solicitações no momento.</h1>
          )}
        </MainContainer>
      </Container>
    </>
  )
}
export default DashProf
