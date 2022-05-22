import ListaSolicitacoes from "../../components/ListaSolicitacoes";
import SideBar from "../../components/SideBar";
import { Container, MainContainer, Title } from "./styles"
import data from '../../../solicitacoes.json';
import LogoutButton from "../../components/LogutButton";

const DashProf = () => {

  return (
    <>
      <SideBar title="Solicitações para Coordenação"/>
      <MainContainer>
        {data 
          ? <ListaSolicitacoes solicitacoes={data}/>
          : <h1>Você não tem solicitações no momento.</h1>
        }
      </MainContainer>
    </>
  )
}
export default DashProf