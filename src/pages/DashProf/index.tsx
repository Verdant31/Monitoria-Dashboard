import ListaSolicitacoes from "../../components/ListaSolicitacoes";
import LogoutButton from "../../components/LogutButton";
import solicitacoes from '../../../solicitacoes.json';
import { Container, MainContainer } from "./styles"
import SideBar from "../../components/SideBar";

const DashProf = () => {
  return (
    <>
      <SideBar title="Solicitações de monitoria"/>
      <MainContainer>
        {solicitacoes 
          ? <ListaSolicitacoes solicitacoes={solicitacoes}/>
          : <h1>Você não tem solicitações no momento.</h1>
        }
      </MainContainer>
    </>
  )
}
export default DashProf