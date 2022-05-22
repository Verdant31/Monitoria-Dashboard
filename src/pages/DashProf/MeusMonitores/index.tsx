import ListaAlunosPendentes from "../../../components/ListaAlunosPendentes";
import ListaMonitores from "../../../components/ListaMonitores";
import LogoutButton from "../../../components/LogutButton";
import SearchBar from "../../../components/SearchBar";
import SideBar from "../../../components/SideBar";
import { Container, MainContainer, Title} from "./styles";

const MeusMonitores = () => {
  return (
    <>
      <SideBar />
      <LogoutButton />
      <MainContainer>
        <Title>Meus Monitores</Title>
        <SearchBar />
        <ListaMonitores />
      </MainContainer>  
    </>
  )
}

export default MeusMonitores;