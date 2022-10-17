import { useState, useEffect } from 'react'
import ListaSolicitacoes from '../../components/ListaSolicitacoes'
import SideBar from '../../components/SideBar'
import { Container, MainContainer } from './styles'
import Title from '../../components/Title'
import ModalSolicitacao from '../../components/ModalSolicitacao'
import { useSolicitacaoModalContext } from '../../contexts/SolicitacaoModalContext'
import { SolicitacaoMonitor } from '../../utils/types'
import { useAuth } from '../../contexts/AuthContext'
import { CoordenadorController } from '../../api/CoordenadorController'
import Loading from '../../components/Loading'

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

  return (
    <>
      {isOpen && <ModalSolicitacao />}
      <Container isModalOpen={isOpen}>
        <SideBar />
        <MainContainer>
          <Title displayTitle title={'Solicitações de Monitoria'} />
          {solicitacoesMonitores ? (
            <ListaSolicitacoes solicitacoes={solicitacoesMonitores} />
          ) : (
            <Loading />
          )}
        </MainContainer>
      </Container>
    </>
  )
}
export default DashProf
