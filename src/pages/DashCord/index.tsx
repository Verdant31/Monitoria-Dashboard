import ListaSolicitacoes from "../../components/ListaSolicitacoes";
import SideBar from "../../components/SideBar";

import { Container, MainContainer } from "./styles"

import data from '../../../solicitacoes.json';
import Title from "../../components/Title";
import ModalSolicitacao from "../../components/ModalSolicitacao";
import { useSolicitacaoModalContext } from "../../contexts/SolicitacaoModalContext";

const DashProf = () => {
  const { isOpen } = useSolicitacaoModalContext();
  return (
    <>
      {isOpen && <ModalSolicitacao />}
      <Container isModalOpen={isOpen}>
        <SideBar/>
        <MainContainer>
          <Title displayTitle title={"Solicitações de Monitoria"} />
          {data 
            ? <ListaSolicitacoes solicitacoes={data}/>
            : <h1>Você não tem solicitações no momento.</h1>
          }
        </MainContainer>
      </Container>
    </>
  )
}
export default DashProf