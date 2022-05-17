import { useEffect, useState } from "react";
import SolicitacoesLista from "../../components/ListaSolicitacoes";
import SideBar from "../../components/SideBar";
import { useAuth } from "../../contexts/AuthContext"
import { Solicitacao } from "../../utils/types";
import { Container, MainContainer, Title } from "./styles"

const DashProf = () => {
  const [ solicitacoes, setSolicitacoes ] = useState<Solicitacao[]>()
  const { user } = useAuth();

  useEffect(() => {
    if(user?.solicitacoes) setSolicitacoes(user.solicitacoes)
  },[])

  return (
    <Container>
      <SideBar />
      <MainContainer>
        <Title>Solicitações</Title>
        {solicitacoes 
          ? <SolicitacoesLista solicitacoes={solicitacoes}/>
          : <h1>Você não tem solicitações no momento.</h1>
        }
      </MainContainer>
    </Container>
  )
}
export default DashProf