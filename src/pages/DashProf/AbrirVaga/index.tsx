import AbrirVagaForm from "../../../components/AbrirVagaForm";
import ListaMonitores from "../../../components/ListaMonitores";
import SearchBar from "../../../components/SearchBar";
import SideBar from "../../../components/SideBar";
import { MainContainer } from "./styles";

const AbrirVaga = () => {
  return (
    <>
      <SideBar title="Abrir vaga para monitoria"/>
      <MainContainer>
        <AbrirVagaForm />
      </MainContainer>  
    </>
  )
}
export default AbrirVaga;