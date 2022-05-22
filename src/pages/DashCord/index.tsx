import SolicitacoesLista from "../../components/ListaSolicitacoes";
import SideBar from "../../components/SideBar";
import { Container, MainContainer, Title } from "./styles"
import data from '../../../solicitacoes.json';
import LogoutButton from "../../components/LogutButton";

const DashProf = () => {

  return (
    <Container>
      <LogoutButton />
      <SideBar />
      <MainContainer>
        <Title>Solicitações da Coordenação</Title>
        {data 
          ? <SolicitacoesLista solicitacoes={data}/>
          : <h1>Você não tem solicitações no momento.</h1>
        }
      </MainContainer>
    </Container>
  )
}
export default DashProf