import CardAluno from "../../../components/CardAluno";
import SideBar from "../../../components/SideBar";
import Title from "../../../components/Title";
import { Container, MainContainer } from "./styles";

const AlunosAprovados = () => {
  return (
    <>
      <Container>
        <SideBar/>
        <MainContainer>
          <Title displayTitle title={"Alunos Pendentes"} />
          <CardAluno />
        </MainContainer>
      </Container>
    </>
  )
}

export default AlunosAprovados;