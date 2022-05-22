import ListaAlunosPendentes from "../../../components/ListaAlunosPendentes";
import LogoutButton from "../../../components/LogutButton";
import SearchBar from "../../../components/SearchBar";
import SideBar from "../../../components/SideBar";
import { Container, MainContainer, Title} from "./styles";

const AlunosAprovados = () => {
  return (
    <>
      <SideBar title="Alunos Pendentes" />
      <MainContainer>
        <SearchBar />
        <ListaAlunosPendentes />
      </MainContainer>  
    </>
  )
}

export default AlunosAprovados;