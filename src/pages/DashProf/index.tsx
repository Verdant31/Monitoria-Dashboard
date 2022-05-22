import SolicitacoesLista from "../../components/ListaSolicitacoes";
import LogoutButton from "../../components/LogutButton";
import solicitacoes from '../../../solicitacoes.json';
import { Container, MainContainer, Title } from "./styles"
import SideBar from "../../components/SideBar";

const DashProf = () => {
  return (
    <Container>
      <LogoutButton />
      <SideBar />
      <MainContainer>
        <Title>Solicitações da Coordenação</Title>
        {solicitacoes 
          ? <SolicitacoesLista solicitacoes={solicitacoes}/>
          : <h1>Você não tem solicitações no momento.</h1>
        }
      </MainContainer>
    </Container>
  )
}
export default DashProf