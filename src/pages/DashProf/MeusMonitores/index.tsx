import ListaAlunosPendentes from "../../../components/ListaAlunosPendentes";
import ListaMonitores from "../../../components/ListaMonitores";
import LogoutButton from "../../../components/LogutButton";
import SearchBar from "../../../components/SearchBar";
import SideBar from "../../../components/SideBar";
import { MainContainer } from "./styles";

const MeusMonitores = () => {
  return (
    <>
      <SideBar title="Meus Monitores"/>
      <MainContainer>
        <SearchBar />
        <ListaMonitores />
      </MainContainer>  
    </>
  )
}

export default MeusMonitores;